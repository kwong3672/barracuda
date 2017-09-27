import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Price from './Price';
import NumberedCircle from './NumberedCircle';

const Footer = ({enableNextButton, handleAddProduct, totalOrderPrice}) => {
  const style = {
    display: "inline-flex",
    color: "#4098d7",
    fontSize: "20px",
    width: "100%",
    borderBottom: "3px solid #78736d",
    padding: "30px 0",
    alignRight: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      fontSize: "24px",
    }
  }

return (
  <div>
    <div style={style} onClick={handleAddProduct}>
      <NumberedCircle 
        value="+"
        border="2px solid #4098d7"
        color="#4098d7"
        backgroundColor="#fff"
        fontSize="20px"
        margin="0 10px 0 0"
        />
      Add another product
    </div>
    <div style={style.alignRight}>
      <Price 
        label="Order Total:" 
        value={totalOrderPrice} 
        display="inline-flex" 
        margin="20px 0"/>
      <Link to="/order_confirmation" >
        <Button 
          backgroundColor="#337ab7" 
          border={0}
          borderRadius="4px"
          color="#fff"
          height="30px"
          label="Next Step: Contact & Billing ->"
          padding="10px 5px"
          width="190px"
          disabled={!enableNextButton}
            />
      </Link>
    </div>
  </div>
)}

export default Footer;
