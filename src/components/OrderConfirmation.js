import React from 'react';

import Price from '../components/Price';

const OrderConfirmation = (props) => {
  const style = {
    border: "3px solid #78736d",
    borderWidth: "3px 0",
    padding: "20px 0",
  }
  console.log(props.orders);
  return (
    <div style={style}>
      {Object.keys(props.orders).map((key) => {
        return (
        <div key={key}>
          <div>{props.orders[key].modelSelected.model_name}</div>
          <div>{props.orders[key].quantity}</div>
          <Price value={props.orders[key].quantity * props.orders[key].modelSelected.model_price} />
        </div>
      )})}
    </div>
  );
};

export default OrderConfirmation;
