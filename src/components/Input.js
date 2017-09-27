import React from 'react';

const Input = ({
  display,
  font,
  handleChange,
  idx,
  inputFont,
  label,
  textAlign,
  width,
  value,
}) => {

  const style = {
    display,
    input: {
      font: "16px Helvetica",
      textAlign,
      width,
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