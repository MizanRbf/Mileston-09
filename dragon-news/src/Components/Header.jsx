import React from "react";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-10">
      {/* Title */}
      <img className="mb-2" src="/assets/logo.png" alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      {/* Time format */}
      <p className="text-accent text-lg">
        {format(new Date(), "EEEE, MMMM MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
