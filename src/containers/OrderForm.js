import React, { Component } from 'react';

import Product from '../components/Product';
import Footer from '../components/Footer';

export default class OrderForm extends Component {
  render() {
    return (
      <div>
        <Product />
        <Footer total={1900} />
      </div>
    )
  }
}
