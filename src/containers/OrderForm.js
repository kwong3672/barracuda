import React, { Component } from 'react';
import { connect } from 'react-redux';

import data from '../data/purchase_form_data.json';
import ProductSelection from '../components/ProductSelection';
import Footer from '../components/Footer';
import { orderFormActions } from '../actions/orderForm';

class OrderForm extends Component {

  handleSelectProduct(e, idx) {
    const id = parseInt(e.target.value, 10);
    let payload;
    if (id) {
      const productSelected = data.products.filter((product) => { return product.product_id === id; });
      const deploymentOptions = data.deployment_methods.filter((method) => {
        let contains = false;
        productSelected[0].product_models.forEach((model) => {
          if (model.deployment_id === method.deployment_id) { contains = true; }
        });
        return contains;
      }) 
      payload = {
        productSelected: productSelected[0],
        deploymentOptions,
        idx,
      }
    } else {
      payload = {
        productSelect: [],
        deploymentOptions: [],

        idx,
      }
    }
    this.props.orderFormActions('SELECT_PRODUCT', payload);
  }

  handleSelectDeploymentOption(e, idx) {
    const id = parseInt(e.target.value, 10);
    const deploymentOptionSelected = data.deployment_methods.filter((method) => { return method.deployment_id === id; })
    const modelOptions = this.props.order[idx].productSelected.product_models.filter((model) => {
      return model.deployment_id === id;
    })
    this.props.orderFormActions('SELECT_DEPLOYMENT_OPTION', { idx, deploymentOptionSelected: deploymentOptionSelected[0], modelOptions})

  }

  handleSelectModel(e, idx) {
    const id = parseInt(e.target.value, 10);
    const modelSelected = this.props.order[idx].productSelected.product_models.filter((model) => {return model.model_id === id; })[0];
    const payload = {
      idx,
      modelSelected,
    }
    this.props.orderFormActions('SELECT_MODEL', payload);
  }

  handleInput(e, idx) {
    let quantity = e.target.value;
    const payload = {
      idx,
      quantity
    }
    isNaN(quantity) ? 
      alert('Please enter valid number') : 
      this.props.orderFormActions('CHANGE_QUANTITY', payload);
  }

  handleDelete(idx) {
    const payload = idx;
    this.props.orderFormActions('DELETE_PRODUCT', payload);
  }


  handleAddProduct() {
    this.props.orderFormActions('ADD_PRODUCT', null);
  }

  validateSelection() {
    alert('you have clicked on the link')
  }


  render() {
    const that = this;
    return (
      <div className="order-form">
        {Object.keys(this.props.order).map((key, i) => {
          return <ProductSelection key={key} 
                          idx={key} 
                          data={data}
                          handleSelectProduct={this.handleSelectProduct.bind(this)}
                          handleSelectDeploymentOption={this.handleSelectDeploymentOption.bind(this)}
                          handleSelectModel={this.handleSelectModel.bind(this)}
                          handleInput={this.handleInput.bind(this)}
                          handleDelete={this.handleDelete.bind(this)}
                          deploymentOptions={this.props.order[key].deploymentOptions}
                          modelOptions={this.props.order[key].modelOptions}
                          deploymentOptionSelected={this.props.order[key].deploymentOptionSelected}
                          productSelected={this.props.order[key].productSelected}
                          modelSelected={this.props.order[key].modelSelected}
                          quantity={this.props.order[key].quantity}
                          orderCount={this.props.orderCount}
                          i={i}
                          />
        })}
        <Footer totalOrderPrice={Object.keys(this.props.order).reduce((acc, key) => {
            const price = that.props.order[key].modelSelected.model_price || 0;
            acc = acc + that.props.order[key].quantity * price;
            return acc;
        }, 0)}
                handleAddProduct={this.handleAddProduct.bind(this)}
                enableNextButton={this.props.enableNextButton}
                validateSelection={this.validateSelection.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.orderForm.order,
    displayDeleteButton: state.orderForm.displayDeleteButton,
    totalOrderPrice: state.orderForm.totalOrderPrice,
    orderCount: state.orderForm.orderCount,
    enableNextButton: state.orderForm.enableNextButton,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderFormActions: (type, productId) => {
      dispatch(orderFormActions(type, productId));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
