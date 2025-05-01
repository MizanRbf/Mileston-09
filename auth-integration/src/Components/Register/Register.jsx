import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../auth-config/auth-config";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = use(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorMessage("");
    setSuccess(false);

    // Create User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // Update Profile
        const profile = {
          displayName: name,
        };

        updateProfile(auth.currentUser, profile)
          .then((result) => {
            console.log(result);
            setSuccess(true);
            navigate("/");
          })
          .catch((error) => {
            setErrorMessage(error.message);
            return;
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        return;
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Please Register</h1>
        <form onSubmit={handleRegister} className="fieldset">
          {/* Input Field */}
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          {/* <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" /> */}
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

          {/* Login Button */}
          <button className="btn btn-neutral mt-4">Register</button>
        </form>

        {/* Link to Login */}
        <p>
          Already have an account? Please
          <Link className="text-blue-500 underline ml-2" to="/login">
            Log In
          </Link>
        </p>
        {/* Error Message */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {/* Success Message */}
        {success && (
          <p className="text-green-500">You have registered successfully</p>
        )}
      </div>
    </div>
  );
};

export default Register;
