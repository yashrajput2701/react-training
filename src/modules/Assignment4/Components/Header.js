
import React from "react";

function Header() {
  return (
    <div className={"headerContainer"}>
      <div className={"toggle"}>
        <div className={"toggleLine"}></div>
        <div className={"toggleLine"}></div>
        <div className={"toggleLine"}></div>
      </div>
      <img src={"./assets/xcoins.png"} className={"logo"} alt="" />

      <div className={"headerRight"}>
        <img src={"./assets/settings.png"} alt="" />
        <img src={"./assets/bell.png"} alt="" />
        <img
          src={"./assets/menu.png"}
          className={"profile"}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;