import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const LogIn = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { loginUser, googleSignIn } = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState();
  const [success, setSuccess] = useState(false);

  // Handle Google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  // Handle LogIn
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorMessage("");
    setSuccess(false);
    // Login user
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        return;
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Please Log In</h1>
        <form onSubmit={handleLogin} className="fieldset">
          {/* Input Field */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          {/* Password Reset */}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          {/* Register Button */}
          <button className="btn btn-neutral mt-4">Log In</button>
        </form>

        {/* Link to Register */}
        <p>
          New to this website? Please
          <Link className="text-blue-500 underline ml-2" to="/register">
            Register
          </Link>
        </p>

        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-white border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        {/* Error Message */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {/* Success Message */}
        {success && (
          <p className="text-green-500">You have logged in successfully.</p>
        )}
      </div>
    </div>
  );
};

export default LogIn;
