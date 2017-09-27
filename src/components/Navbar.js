import React from 'react';
import { withRouter } from 'react-router-dom';

import ArrowButton from './ArrowButton';

const Navbar = ({location}) => {
  const style = {
    alignItems: "center",
    display: "inline-flex",
    flexWrap: "wrap",
    padding: "40px 0",
  }

  return (
    <div style={style}>
      <ArrowButton label="Select Products" isActive={location.pathname === '/'} />
      <ArrowButton label="Contact & Billing" isActive={location.pathname === '/contact_billing'}/>
    </div>
  );
};

export default withRouter(Navbar);

