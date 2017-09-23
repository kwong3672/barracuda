import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) =>
  <div className="navbar">
    <ul>
      <NavLink to="/" activeClassName="active" exact><li>Select Products</li></NavLink>
      <NavLink to="/order_confirmation"><li>Contact & Billing</li></NavLink>
    </ul>
  </div>

export default Navbar;
