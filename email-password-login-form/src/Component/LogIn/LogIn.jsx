import React, { useRef, useState } from "react";
import { auth } from "../../Config/Config";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router";

const LogIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef();

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Reset
    setErrorMessage("");
    setSuccess(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        // Email verified checkup
        if (!result.user.emailVerified) {
          alert("Please verify your email address");
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    setErrorMessage("");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("check your email to reset password");
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLoginForm} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
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
          <div onClick={handleForgetPassword}>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          New to this website? Please
          <Link to="/signUp" className="text-blue-500 underlined ml-2">
            Sign Up
          </Link>
        </p>
        {<p className="text-red-500">{errorMessage}</p>}
        {success && <p className="text-green-500">Logged In successfully</p>}
      </div>
    </div>
  );
};

export default LogIn;
