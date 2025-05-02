import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <button className="border w-full mb-2 rounded-sm py-2 flex justify-center items-center gap-2 cursor-pointer">
        <FaGoogle />
        Login with Google
      </button>
      <button className="border w-full mb-2 rounded-sm py-2 flex justify-center items-center gap-2 cursor-pointer">
        <FaGithub /> Login with Github
      </button>
    </div>
  );
};

export default SocialLogin;
