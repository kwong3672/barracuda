import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) =>
  <div className="navbar">
    <NavLink className="nav-link" to="/" activeClassName="active" exact><div className="triangle-left" /><div className="link-text">Select Products</div><div className="triangle-right" /></NavLink>
    <NavLink className="nav-link" to="/order_confirmation"><div className="triangle-left" /><div className="link-text">Contact & Billing</div><div className="triangle-right" /></NavLink>
  </div>

export default Navbar;


    // <div className="triangle-left" /><NavLink className="nav-link" to="/" activeClassName="active" exact>Select Products</NavLink><div className="triangle-right" />
    // <div className="triangle-left" /><NavLink className="nav-link" to="/order_confirmation">Contact & Billing</NavLink><div className="triangle-right" />
