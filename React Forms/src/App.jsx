import { useState } from "react";
import "./App.css";
import Authenticate from "./components/Authenticate";
import SignUp from "./components/SignUpForm";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUp token={token} setToken={setToken} />
    </>
  );
}
