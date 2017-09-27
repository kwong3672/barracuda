import React from 'react';

const NumberedCircle = ({margin, border, size, color, value, backgroundColor, fontSize}) => {

  const style = {
    width: size || "20px",
    backgroundColor: backgroundColor || "gray",
    height: size || "20px",
    borderRadius: size || "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: color || "#fff",
    fontSize: fontSize || "14px",
    border: border,
    margin: margin,
  }
  

  return (
    <div style={style}>{value}</div>
  );
};

export default NumberedCircle;
