import React, { Component } from 'react';
import data from '../data/purchase_form_data.json';
import { connect } from 'react-redux';

import { orderFormActions } from '../actions/orderForm.js';

class Product extends Component {
  
  handleSelectProduct(e) {
    const id = parseInt(e.target.value, 10);
    const productSelected = data.products.filter((product) => { return product.product_id === id; });
    const deploymentMethods = data.deployment_methods.filter((method) => {
      let contains = false;
      productSelected[0].product_models.forEach((model) => {
        if (model.deployment_id === method.deployment_id) { contains = true; }
      });
      return contains;
    }) 
    this.props.orderFormActions('SELECT_PRODUCT', {productSelected, deploymentMethods});
  }

  handleSelectOption(e) {
    const id = parseInt(e.target.value, 10);
    const deploymentMethodSelected = data.deployment_methods.filter((method) => { return method.deployment_id === id; })
    const modelOptions = this.props.productSelected[0].product_models.filter((model) => {
      return model.deployment_id === id;
    })
    console.log(modelOptions);
    this.props.orderFormActions('SELECT_DEPLOYMENT_OPTION', { deploymentMethodSelected, modelOptions})

  }

  handleSelectModel(e) {
    const id = parseInt(e.target.value, 10);
    const modelSelected = this.props.productSelected[0].product_models.filter((model) => {return model.model_id === id; })
    this.props.orderFormActions('SELECT_MODEL', modelSelected[0])
  }

  handleInput(e) {
    let quantity = e.target.value;
    isNaN(quantity) ? 
      alert('Please enter valid number') : 
      this.props.orderFormActions('CHANGE_QUANTITY', quantity)
  }

  handleDelete() {
    console.log('delete pressed');
  }

  render() {
    console.log(data);
    return (
      <div>
        <div className="product-selection">
          <h3>Select Your Product</h3>
          <label>Product</label>
          <select onChange={this.handleSelectProduct.bind(this)}>
            <option value="Select" defaultValue="Select">(Select)</option>
            {data.products.map((product) => <option key={product.product_id} value={product.product_id}>{product.product_name}</option> )}
          </select>
          <label>Deployment Options</label>
          <select onChange={this.handleSelectOption.bind(this)}>
            <option value="Select" defaultValue="Select">(Select)</option>
             {this.props.deploymentMethods.map((method) => <option key={method.deployment_id} value={method.deployment_id}>{method.deployment_name}</option> )}
          </select>
          <label>Model</label>
          <select onChange={this.handleSelectModel.bind(this)}>
            <option value="Select" defaultValue="Select">(Select)</option>
            {this.props.modelOptions.map((model) => <option key={model.model_id} value={model.model_id}>{model.model_name} (${model.model_price})</option>)}
          </select>
        </div>
        <div>
          <label>Quantity</label>
          <input value={this.props.quantity} onChange={this.handleInput.bind(this)}/>
        </div>
        <div>
          <label>Price</label>
          <p>{this.props.modelSelected.model_price ? '$' + this.props.modelSelected.model_price * this.props.quantity : ''}</p>
        </div>
        <div>
          <button>Delete</button> 
        </div>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productSelected: state.orderForm.productSelected,
    deploymentMethods: state.orderForm.deploymentMethods,
    modelOptions: state.orderForm.modelOptions,
    modelSelected: state.orderForm.modelSelected,
    quantity: state.orderForm.quantity,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderFormActions: (type, productId) => {
      dispatch(orderFormActions(type, productId));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

