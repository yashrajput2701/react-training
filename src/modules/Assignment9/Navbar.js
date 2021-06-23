import React from "react";
import {
    Link
  } from "react-router-dom";
  import "./Style.css";
  const styles = {
    componentWrapper: {
        display: "flex",
        justifyContent: "space-around",
    },
    componentlist: {
      display: "flex",
      justifyContent: "space-around"
  }
}

  export default function Navbar() {
    
    return (
<nav >
<ul style={styles.componentlist}>
  <li>
    {/* <Link to="/">SHOP ONLINE</Link> */}
    <h1>SHOP ONLINE</h1>
  </li>
  <li>
    <Link to="/">Log out</Link>
  </li>
</ul>
</nav>
    )
}