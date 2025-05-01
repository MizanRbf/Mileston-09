import React from "react";
import { NavLink } from "react-router";
const Header = () => {
  const links = (
    <nav className="space-x-4">
      <NavLink type="btn btn-primary" to="/">
        Home
      </NavLink>
      <NavLink to="register">Register</NavLink>
      <NavLink to="signUp">Sign Up</NavLink>
      <NavLink to="signIn">Sign In</NavLink>
      <NavLink to="signOut">Sign Out</NavLink>
      <NavLink to="logIn">Log In</NavLink>
    </nav>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Form</a>
        </div>
        <div className="navbar-center">{links}</div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
<nav>
  <ul>
    <li></li>
  </ul>
</nav>;
