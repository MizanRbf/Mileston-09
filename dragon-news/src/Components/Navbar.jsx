import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="space-x-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img src="/assets/user.png" alt="" />
        <button className="btn btn-primary px-8">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
