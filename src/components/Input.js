import React from 'react';

// Component that takes label, value and change handlers props
// displays a formatted input tag with label
// additional props can be passed in for styling 
const Input = ({
  display,
  font,
  handleChange,
  idx,
  inputFont,
  label,
  textAlign,
  width,
  value
}) => {

  const style = {
    display,
    input: {
      font: font || "16px Helvetica",
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