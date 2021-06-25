import "./Style.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const [response, setResponse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };
  const login = () => {
    // console.log(email + password);
    fetch("https://reqres.in/api/login", requestOptions)
      .then(response => response.json())
      .then(data => setResponse(data.token));
  
}
const submit = () =>{
  console.log(response);
      if(response === 'QpwL5tke4Pnpja7X4'){
      history.push("/navbar");
  }else{
      alert("Please enter correct email and password!")
  }
    // setResponse(data.token)
    // console.log(response);
    //     if(response === 'QpwL5tke4Pnpja7X4'){
    //     history.push("/navbar");
    // }else{
    //     alert("Please enter correct email and password!")
    // }
  };
  login()
  return (
    <>
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Login</h2>
          <form required>
        
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                value={email} onInput={e => setEmail(e.target.value)}
                type="email"
                name="email"
                
              />
              
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                value={password} onInput={e => setPassword(e.target.value)}
                type="password"
                name="password"
                
              />
            </div>
            <div className="info">
              <small>Password must be eight characters in length.</small>
            </div>
            <div className="submit">
              <button onClick={submit}>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
