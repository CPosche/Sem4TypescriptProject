import { useMutation } from "@apollo/client";
import React from "react";
import { login } from "../utils/queries";
import JWTHandler from "../utils/JWTHandler";

type Props = {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<Props> = ({setLoggedIn}) => {

  const [execLogin, { data, loading, error}] = useMutation(login);

  const handleLogin = async () => {
    await execLogin({
      variables: {
        username: "Chunti",
        password: "test123"
      }
    })
    JWTHandler.setToken(data.login);
    setLoggedIn(JWTHandler.loggedIn());
  }


  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl text-orange-500 stroke">Login</span>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
        <div className="flex flex-col items-center">
          <span>Username</span>
          <input
            type="text"
            placeholder="Username"
            className="rounded-xl logininput"
          />
        </div>
        <div className="flex flex-col items-center">
          <span>Password</span>
          <input
            type="password"
            placeholder="Password"
            className="rounded-xl logininput"
          />
        </div>
        </div>
        <div>
          <button className="rounded-xl bg-green-500 border-b-4 hover:border-b-0 hover:mt-1 border-green-700 text-white px-4" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
