import React from 'react';

const Dropdown = ({
  idx,
  label,
  options,
  selectValue,
  handleChange,
  optionId,
  optionName,
  width,
  font,
  fontSize,
}) => {

  fontSize = fontSize || "16px";
  const style = {
    font,
    fontSize,
    label: {
    },
    select: {
      width,
      margin: "5px 5px 5px 0"
    }
  }

  return (
  <div style={style}>
    <label style={style.label}>{label}</label>
    <select style={style.select} value={selectValue} onChange={handleChange ? e => handleChange(e, idx) : null} >
      <option value="Select" disabled>(Select)</option>
      {options.map((option) => <option key={option[optionId] || option} value={option[optionId] || option}>{option[optionName] || option}</option> )}
    </select>
  </div>
  );
} 

export default Dropdown;
