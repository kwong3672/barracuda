import React from 'react';

const ArrowButton = ({ color, isActive, label }) => {
  color = isActive ? "#bbd0eb" : "#cfcece";
  const style = {
    display: "inline-flex",
    left: {
      width: 0, 
      height: 0,
      borderTop: "20px solid" + color,
      borderBottom: "20px solid" + color,
      borderLeft: "20px solid #fff",
    },
    middle: {
      backgroundColor: color,
      width: "175px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    right: {
      width: 0, 
      height: 0, 
      borderTop: "20px solid #fff",
      borderBottom: "20px solid #fff",
      borderLeft: "20px solid" + color,
    },
  }

  return (
    <div style={style}>
      <div style={style.left} />
      <div style={style.middle}>{label}</div>
      <div style={style.right} />
    </div>
  );
}

export default ArrowButton;
