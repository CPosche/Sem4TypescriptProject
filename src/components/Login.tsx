import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl text-orange-500 stroke">Login</span>
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
    </div>
  );
};

export default Login;
