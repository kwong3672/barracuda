import React from 'react';

const NumberedCircle = ({margin, border, size, color, value, backgroundColor, fontSize}) => {

  const style = {
    alignItems: "center",
    backgroundColor: backgroundColor || "gray",
    border: border,
    borderRadius: size || "20px",
    color: color || "#fff",
    display: "flex",
    fontSize: fontSize || "14px",
    height: size || "20px",
    justifyContent: "center",
    margin: margin,
    width: size || "20px",
  }

  return (
    <div style={style}>{value}</div>
  );
};

export default NumberedCircle;
