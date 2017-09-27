import React from 'react';

const Header = ({children, title}) => {
  const style = {
    color: "#222",
    fontSize: "16px",
    title: {
      color: "#4098d7",
      fontSize: "28px",
      fontWeight: 500, 
    }
  }

  return (
    <div style={style}>
      <h1 style={style.title}>{title}</h1>
      <p>{children}</p>
    </div>
  );
};


export default Header;
