import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { connect } from 'react-redux';
import Price from '../components/Price';
import BillingInfo from '../components/BillingInfo';

class OrderConfirmation extends Component {
  render() {

    return (
      <div>
        <div>
          {Object.keys(this.props.orders).map((key) => {
            return (
            <div>
              <div>{this.props.orders[key].modelSelected.model_name}</div>
              <div>{this.props.orders[key].quantity}</div>
              <Price label="Price" value={this.props.orders[key].quantity * this.props.orders[key].modelSelected.model_price} />
            </div>
          )})}
        </div>
        <BillingInfo />
        
        <Link to='/'>
          <Button label="Back to Product Selection" width="200px"/>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderForm.order,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmation);