import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Config/Config";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsAndConditions = e.target.terms.checked;
    setErrorMessage("");
    setSuccess(false);

    if (termsAndConditions === false) {
      setErrorMessage("Please accept terms and conditions.");
      return;
    }

    // Password Validate
    const passRegExpDigit = /(?=.*\d)/;
    const passRegExpLowCase = /(?=.*[a-z])/;
    const passRegExpUpperCase = /(?=.*[A-Z])/;
    const passRegExpMaxEight = /.{8,}/;

    if (passRegExpDigit.test(password) === false) {
      setErrorMessage("Password must be one digit.");
      return;
    } else if (passRegExpLowCase.test(password) === false) {
      setErrorMessage("Password must be one lowercase.");
      return;
    } else if (passRegExpUpperCase.test(password) === false) {
      setErrorMessage("Password must be one uppercase.");
      return;
    } else if (passRegExpMaxEight.test(password) === false) {
      setErrorMessage("Password must more than 8");
      return;
    }
    //  Create User
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);

        // email verify
        // result.user can be replace on below function
        sendEmailVerification(auth.currentUser).then(() => {
          setSuccess(true);
          alert("check email");
        });

        // updateUserProfile
        const profile = {
          displayName: { name },
          photoURL: { photo },
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {})
          .catch((error) => {
            setErrorMessage(error.message);
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn} className="fieldset">
              <h1>Please Sign Up</h1>

              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />

              <label className="Photo Url">Email</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo Url"
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />

              {/* Password Input */}

              <label className="label">Password</label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-8 top-3.5"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <label className="label">
                <input type="checkbox" name="terms" className="checkbox" />
                Accept terms and conditions.
              </label>

              <input
                type="submit"
                className="btn btn-primary"
                value="sign in"
              />
            </form>

            <p>
              Already have an account? Please{" "}
              <Link to="/logIn" className="text-blue-500 underlined">
                Login
              </Link>
            </p>

            {errorMessage && (
              <p className=" text-lg text-red-500">{errorMessage}</p>
            )}
            {success && (
              <p className="text-lg text-green-500">Sign Up Successfully</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
