import React, { useState } from "react";
import Signup from "./Signup";
import "./style.css";
import Login from "./Login";
export default function Mainscreen() {
  const [isMovie, setIsMovie] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const checkLogin = () => {
    setIsMovie(false);
    setIsLogin(true);
  };

  const checkSignup = () => {
    setIsMovie(false);
    setIsSignup(true);
  };

  return (
    <>
      {isMovie && (
        <div className={"cards"}>
          <div className={"main"}>
            <div className={"path"}>
              <h1 className={"head"}>MOVIES</h1>
              <button className={"butn"} onClick={checkLogin}>
                LOGIN
              </button>
              <button className={"butn"} onClick={checkSignup}>
                SIGNUP
              </button>
            </div>
          </div>
        </div>
      )}
      {isLogin && <Login />}
      {isSignup && <Signup />}
      {/* {isMovie && <Movie />} */}
    </>
  );
}
