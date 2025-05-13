import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  // Sign Out
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("signOut successfully");
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center py-3">
      <div>{user?.email}</div>
      <div className="space-x-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img src="/assets/user.png" alt="" />
        {user ? (
          <button
            onClick={handleSignOut}
            to=""
            className="btn btn-primary px-8"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
