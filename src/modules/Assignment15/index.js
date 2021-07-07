import React, {useState} from "react";
import Header from "../Assignment15/Components/Header";
import "./index.css";
import CardData from "../Assignment15/Components/carddata";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import GetGoogleSheetData from "../Assignment15/Components/getGoogleSheetData";
function Assignment15() {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <> <Router>
            <Switch>
            <Route path="/CardData">
           <CardData/>
            </Route>
           
            <Route path="/">
           
            <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container1">
      <div className="container">

      <Header /> 
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      </div>
     
      <GetGoogleSheetData/>
    </div>
            </Route> 
          </Switch>

          </Router>
     
   
    </>
  );
}
export default Assignment15;
