import React from 'react';

const Button = ({ 
  idx,
  backgroundColor, 
  color, 
  padding, 
  margin, 
  label, 
  borderRadius, 
  border, 
  handleClick,
  disabled,
  width,
  height,
}) => {

  const style = {
    backgroundColor: backgroundColor || '#337ab7',
    border: border || 0,
    borderRadius: borderRadius || "4px", 
    color: color || '#fff',
    padding: padding || '10px 20px',
    height: height || '30px',
    width: width || '75px',
    margin: margin || 0,
  };

  return (
    <button style={style} disabled={disabled} onClick={(e) => handleClick ? handleClick(idx) : null}>{label}</button>
  )  
}

export default Button;
