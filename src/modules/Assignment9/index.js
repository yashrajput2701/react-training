import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Form from "./Form"
  import "./Style.css";
//   import Shoppingpage from "./Shoppingpage";
  import Navbar from "./Navbar";
  import Card from "./Card";
  export default function Assignment9() {
    return (
      <Router>
    
          <div >
          <Switch>
            <Route path="/navbar">
            <Navbar />
            <Card />
            </Route>
           
            <Route path="/">
            <Form />
            </Route> 
          </Switch>
        </div>
        {/* <Navbar />
        <Shoppingpage /> */}
      </Router>
      
    );
  }
  
