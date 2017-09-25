import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OrderConfirmation extends Component {
  render() {
    return (
      <div>
        <div>This is the order Confirmation Page</div>
        <Link to='/'><button>Back</button></Link>
      </div>
    );
  }
}