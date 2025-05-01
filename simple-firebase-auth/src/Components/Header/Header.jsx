import React from 'react';
import { NavLink } from 'react-router';
const Header = () => {
  return (
    <nav>
      <ul className='space-x-4'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </ul>
    </nav>
  );
};

export default Header;