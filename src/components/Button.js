import React from 'react';

const Button = ({ 
  backgroundColor, 
  border, 
  borderRadius, 
  color, 
  disabled,
  font,
  handleClick,
  height,
  idx,
  label, 
  margin, 
  width,
}) => {

  const style = {
    backgroundColor: backgroundColor || '#337ab7',
    border: border || 0,
    borderRadius: borderRadius || "4px", 
    color: color || '#fff',
    display: "flex",
    fontSize: "16px",
    height: height || '30px',
    justifyContent: "center",
    margin: margin || 0,
    padding: 0,
    width: width || '75px',
  };

  return (
    <button style={style} disabled={disabled} onClick={(e) => handleClick ? handleClick(idx) : null}>{label}</button>
  )  
}

export default Button;
