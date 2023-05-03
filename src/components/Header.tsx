import React from "react";
import Logo from "./Logo";
import Loggedin from "./Loggedin";
import Login from "./Login";

type Props = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ loggedIn, setLoggedIn }) => {
  return (
    <div className="flex w-full z-10 h-2/10 headerbanner max-sm:rounded-none rounded-t-3xl shadow-under">
      <div className="flex w-1/2"></div>
      <div className="flex w-1/2 justify-between">
        <Logo />
        <div className="flex pr-10 items-center">
          {loggedIn ? <Loggedin setLoggedIn={setLoggedIn} /> : <Login setLoggedIn={setLoggedIn} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
