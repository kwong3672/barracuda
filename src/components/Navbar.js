import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ArrowButton from './ArrowButton';

const Navbar = (props) =>
  <div className="navbar">
    <NavLink className="nav-link" to="/" activeClassName="active" exact>
      <div className="triangle-left" /><div className="link-text">Select Products</div><div className="triangle-right" />
    </NavLink>
    <NavLink className="nav-link" to="/order_confirmation"><div className="triangle-left" /><div className="link-text">Contact & Billing</div><div className="triangle-right" /></NavLink>
    <ArrowButton isActive={true} label="Select Products"/>
    <ArrowButton label="Contact & Billing" />
  </div>

export default Navbar;
