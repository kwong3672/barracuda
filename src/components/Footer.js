import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = (props) =>
  <div className="footer-left">
    <div className="add-product-container" onClick={props.handleAddProduct}>
      <div className="add-sign">+</div>
      <div>Add another product</div>
    </div>
    <div className="footer-right">
      <div>Order Total: ${props.totalOrderPrice}</div>
      <Link to='/order_confirmation'><button className="next-step-button">Next Step: Contact & Billing -></button></Link>
    </div>
  </div>

export default Footer;
