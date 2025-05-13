import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  const location = useLocation();
  const { setUser, loginUser, setLoading } = use(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setSuccess(false);
    setErrorMessage("");

    // Login User
    loginUser(email, password)
      .then((result) => {
        setUser(result);
        setLoading(false);
        setSuccess(true);
        navigate(location.state || "/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-center text-xl">Login your account</h1>
        <hr className="border-base-300 my-3" />
        <form onSubmit={handleLoginForm} className="fieldset">
          {/* Email */}
          <label className="label">Email Address</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter your email address"
          />
          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter your password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Login
          </button>
        </form>
        {/* Error */}
        <p className="text-red-500">{errorMessage}</p>

        {/* Success Message */}
        {success && (
          <p className="text-green-500">You have Logged In successfully</p>
        )}

        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-red-600" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
