import React from "react";
import SocialLogin from "./SocialLogin";
import SocialSite from "./SocialSite";
import QZone from "./QZone";

const AsideRight = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl">Login With</h3>
      <SocialLogin></SocialLogin>
      <h1 className="mt-8 mb-4 text-xl">Find us On</h1>
      <SocialSite></SocialSite>
      <QZone></QZone>
    </div>
  );
};

export default AsideRight;
