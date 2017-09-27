import React from 'react';

import Dropdown from './Dropdown';
import Input from './Input';

const BillingInfo = (props) => {
  const style = {
    display: "inline-flex",
    padding: "30px 0",
    width: "100%",
    col1: {
      width: "50%",
    },
    col2: {
      width: "50%",
    },
  }
return (
  <div style={style}>
    <div style={style.col1}>
      <Input label="First Name" />
      <Input label="Last Name" />
      <Input label="Company Name" />
      <Input label="Email" />
      <Input label="Phone" />
    </div>
    <div style={style.col2}>
      <Dropdown label="Country" options={['USA', 'Canada']}/>
      <Input label="Street Address" />
      <Input label="City" />
      <Dropdown label="State/Province" options={['California', 'Florida', 'New York']}/>
      <Input label="Zip/Postal Code" />
      <Dropdown label="Shipping Method" options={['Ground', 'Express', 'International']} />
    </div>
  </div>
)}

export default BillingInfo;