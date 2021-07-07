import React from "react";
import "./header.css";
function Header() {
  return (
      <>
    <div className={"headercontainer"}>
     <h2 className={'heading'}>Wrytin</h2>
     <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search"
            name="s" 
            className={'input'}
        />
        <button type="submit"
        className={'button'}>Search</button>
    </form>
    </div>
    </>
  );
}

export default Header;