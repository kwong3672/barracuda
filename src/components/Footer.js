import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import NumberedCircle from './NumberedCircle';
import Price from './Price';

const Footer = ({ enableNextButton, handleAddProduct, totalOrderPrice }) => {
  const style = {
    borderBottom: "3px solid #78736d",
    color: "#4098d7",
    display: "inline-flex",
    fontSize: "20px",
    padding: "30px 0",
    width: "100%",
    alignRight: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      fontSize: "24px",
    },
    link: {
      textDecoration: "none",
    },
  }

  return (
    <div>
      <div style={style} onClick={handleAddProduct}>
        <NumberedCircle 
          backgroundColor="#fff"
          border="2px solid #4098d7"
          color="#4098d7"
          fontSize="20px"
          margin="0 10px 0 0"
          value="+" />
        Add another product
      </div>
      <div style={style.alignRight}>
        <Price 
          display="inline-flex" 
          label="Order Total:" 
          margin="20px 0"
          value={totalOrderPrice} /> 
        <Link style={style.link} to="/contact_billing" onClick={(e) => {
          if (!enableNextButton) {
            alert('Please complete all fields before proceeding to checkout');
            e.preventDefault();
          }}}>
          <Button 
            backgroundColor="#337ab7" 
            border={0}
            borderRadius="4px"
            color="#fff"
            height="30px"
            label="Next Step: Contact & Billing ->"
            padding="10px 5px"
            width="260px" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
