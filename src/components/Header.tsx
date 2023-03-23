import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex w-full justify-center h-2/10 headerbanner max-sm:rounded-none rounded-t-3xl shadow-under">
      <Logo />
    </div>
  );
};

export default Header;
