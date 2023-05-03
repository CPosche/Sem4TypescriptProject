import React from "react";
import JWTHandler from "../utils/JWTHandler";

type Props = {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Loggedin: React.FC<Props> = ({setLoggedIn}) => {

  const handleLogout = () => {
    JWTHandler.removeToken();
    setLoggedIn(JWTHandler.loggedIn());
  }

  return <div className="flex flex-col items-center gap-3" ><div className="flex flex-col items-center"><p>Logged in as</p>
  <p>{JWTHandler.decodeToken().username}</p> </div>
    <button className="rounded-xl bg-red-500 border-b-4 hover:border-b-0 hover:mt-1 border-red-700 text-white px-4" onClick={handleLogout}>Logout</button>
  </div>;
};

export default Loggedin;
