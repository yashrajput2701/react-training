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
//   const styles = {
//       componentWrapper: {
//           display: "flex",
//           justifyContent: "space-around",
//       },
//       componentlist: {
//         display: "flex",
//         justifyContent: "space-around"
//     }
//   }
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
  
//   function Home() {
//     return <h2>Home</h2>;
//   }
  
//   function About() {
//     return <h2>About</h2>;
//   }
  
//   function Users() {
//     return <h2>Users</h2>;
//   }