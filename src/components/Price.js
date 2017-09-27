import React from 'react';
import Currency from 'react-currency-formatter';

const Price = ({
  color,
  display,
  font,
  label,
  labelColor,
  labelFont,
  margin,
  value,
}) => {

  const style = {
    color,
    display,
    font,
    margin,
    label: {
      color: labelColor,
      padding: "0 10px",
      font: labelFont,
    },
  }

  return (

    <div style={style}>
      <div style={style.label}>{label}</div>
      <Currency quantity={value} currency="USD" />
    </div>
  );
}

export default Price;
