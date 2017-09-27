import React from 'react';

const Input = ({
  handleChange,
  idx,
  label,
  value,
  width,
  display,
  textAlign,
}) => {

  const style = {
    display,
    input: {
      width,
      textAlign,
    }
  }

  return (
    <div style={style}>
      <label>{label}</label>
      <input style={style.input} value={value} onChange={handleChange ? e => handleChange(e, idx) : null}/>
    </div>
  );
}

export default Input;