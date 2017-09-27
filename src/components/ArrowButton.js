import React from 'react';

const ArrowButton = ({ color, isActive, label }) => {
  color = color || isActive ? "#bbd0eb" : "#cfcece";
  const style = {
    display: "inline-flex",
    left: {
      borderBottom: "20px solid" + color,
      borderLeft: "20px solid #fff",
      borderTop: "20px solid" + color,
      height: 0,
      width: 0, 
    },
    middle: {
      alignItems: "center",
      backgroundColor: color,
      display: "flex",
      justifyContent: "center",
      width: "175px",
    },
    right: {
      borderBottom: "20px solid #fff",
      borderLeft: "20px solid" + color,
      borderTop: "20px solid #fff",
      height: 0, 
      width: 0, 
    },
  }

  return (
    <div style={style}>
      <div style={style.left} />
      <div style={style.middle}>{label}</div>
      <div style={style.right} />
    </div>
  );
};

export default ArrowButton;
