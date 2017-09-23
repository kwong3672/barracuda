import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) =>
  <div>
    <div>Order Total: <span>${props.total}</span></div>
    <Link to='/order_confirmation'><button>Next Step</button></Link>
  </div>

export default Footer;
