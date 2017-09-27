import React from 'react';

const Dropdown = ({
  display,
  idx,
  font,
  fontSize,
  handleChange,
  label,
  options,
  optionId,
  optionName,
  optionPrice,
  selectFontSize,
  selectValue,
  width,
}) => {

  const style = {
    font,
    fontSize: fontSize || "16px",
    label: {
      display: display || "flex",
    },
    select: {
      width,
      margin: "5px 5px 5px 0",
      fontSize: selectFontSize || "16px",
    }
  };

  return (
    <div style={style}>
      <label style={style.label}>{label}</label>
      <select style={style.select} value={selectValue} onChange={handleChange ? e => handleChange(e, idx) : null} >
        <option value="Select" disabled>(Select)</option>
        {options.map((option) => <option key={option[optionId] || option} value={option[optionId] || option}>{option[optionName] || option} {optionPrice ? '($' + option[optionPrice] + ')' : ''}</option> )}
      </select>
    </div>
  );
}; 

export default Dropdown;
