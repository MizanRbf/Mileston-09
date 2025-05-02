import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const SocialSite = () => {
  return (
    <div className="flex flex-col *:justify-start *:bg-white *:py-7">
      <button className="btn">
        <span className="bg-base-300 p-2 rounded-full">
          <FaFacebookF />
        </span>
        Facebook
      </button>
      <button className="btn">
        <span className="bg-base-300 p-2 rounded-full">
          <FaTwitter />
        </span>
        Twitter
      </button>
      <button className="btn">
        <span className="bg-base-300 p-2 rounded-full">
          <FaInstagram />
        </span>
        Instagram
      </button>
    </div>
  );
};

export default SocialSite;
