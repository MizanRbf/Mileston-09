import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Register = () => {
  const { createUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setSuccess(false);
    setErrorMessage("");

    // CreateUser

    createUser(email, password)
      .then(() => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {})
          .catch((error) => {
            setErrorMessage(error);
          });
        setSuccess(true);
        navigate("/auth/login");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-center text-xl">Register your account</h1>
        <hr className="border-base-300 my-3" />

        <form onSubmit={handleRegister} className="fieldset">
          {/* Name */}
          <label className="label">Your Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter your Name"
            required
          />
          {/* Photo */}
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Enter your photo url"
            required
          />
          {/*Email */}
          <label className="label">Email Address</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter your email address"
            required
          />
          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter your password"
            required
          />
          {/* CheckBox */}
          <label className="label">
            <input type="checkbox" className="checkbox" />
            Accept terms & conditions
          </label>

          <button type="submit" className="btn btn-primary mt-4">
            Register
          </button>
        </form>
        {/* ErrorMessage */}
        <p className="text-red-500">{errorMessage}</p>

        {/* Success Message */}
        {success && (
          <p className="text-green-500">You have registered successfully</p>
        )}

        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-red-600" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
