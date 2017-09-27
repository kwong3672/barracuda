import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../components/Button';
import BillingInfo from '../components/BillingInfo';
import Price from '../components/Price';

class ContactBilling extends Component {
  render() {
    const style = {
      border: "3px solid #78736d",
      borderWidth: "3px 0",
      padding: "20px 0",
    }
    return (
      <div>
        <div style={style}>
          {Object.keys(this.props.orders).map((key) => {
            return (
            <div key={key}>
              <div>{this.props.orders[key].modelSelected.model_name}</div>
              <div>{this.props.orders[key].quantity}</div>
              <Price value={this.props.orders[key].quantity * this.props.orders[key].modelSelected.model_price} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactBilling);