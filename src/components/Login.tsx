import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { login } from "../utils/queries";
import JWTHandler from "../utils/JWTHandler";

type Props = {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<Props> = ({ setLoggedIn }) => {
  const [execLogin, { data, loading, error }] = useMutation(login);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorText, setErrorText] = useState<string>("");

  const handleLogin = async () => {
    setErrorText("");
    if (!username || !password) {
      setErrorText("Please fill in both fields");
      return;
    }
    await execLogin({
      variables: {
        username: username,
        password: password,
      },
    });
  };

  useEffect(() => {
    if (data) {
      if (data.login.status === 200) {
        JWTHandler.setToken(data.login.message);
        setLoggedIn(JWTHandler.loggedIn());
      } else {
        setErrorText("Wrong username or password");
      }
    }
  }, [data, setLoggedIn]);

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
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="flex flex-col items-center">
            <span>Password</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="rounded-xl logininput"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="rounded-xl bg-green-500 border-b-4 hover:border-b-0 hover:mt-1 border-green-700 text-white px-4"
            onClick={handleLogin}
          >
            Login
          </button>
          <button className="rounded-xl bg-yellow-500 border-b-4 hover:border-b-0 hover:mt-1 border-yellow-700 text-white px-4">
            Register
          </button>
          <p className="text-sm">{errorText != "" ? errorText : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
