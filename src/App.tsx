import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import JWTHandler from "./utils/JWTHandler";

function App() {
  const [loggedIn, setLoggedIn] = useState(JWTHandler.loggedIn());

  return (
    <div className="App h-screen w-screen flex flex-col bg-slate-900 text-white justify-center items-center">
      <div className="flex flex-col max-sm:w-full max-sm:h-full w-4/5 h-4/5 bg-white/50 max-sm:rounded-none rounded-3xl items-center">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Content />
      </div>
    </div>
  );
}

export default App;
