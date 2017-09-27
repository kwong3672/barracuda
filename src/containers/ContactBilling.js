import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../components/Button';
import BillingInfo from '../components/BillingInfo';
import OrderConfirmation from '../components/OrderConfirmation';

class ContactBilling extends Component {
  render() {

    return (
      <div>
        <OrderConfirmation orders={this.props.orders} />
        <BillingInfo />
        <Link to='/'>
          <Button label="Back to Product Selection" width="250px"/>
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