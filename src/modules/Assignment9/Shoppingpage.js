import React from "react";
import "./Style.css";
import Card from "./Card";
export default function Shoppingpage() {
  return (
    <div>
      <div className={"alignment"}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className={"alignment"}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className={"alignment"}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
