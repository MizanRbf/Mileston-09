import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("signOut successfully");
        navigate("/logIn");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/dashBoard">DashBoard</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      {/* title */}
      <div className="btn btn-ghost text-xl">Auth-Integration</div>

      {/* links */}
      <div className="flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Button */}
      {user ? (
        <button onClick={handleSignOut} className="btn btn-primary">
          Sign Out
        </button>
      ) : (
        <Link to="logIn">Log In</Link>
      )}
    </div>
  );
};

export default Header;
