import React from "react";
import logo from "../assets/images/Logo.png";

const Logo = () => {
  return (
    <div className="w-1/8 flex justify-center items-center">
      <img className="h-3/4" src={logo} />
    </div>
  );
};

export default Logo;
