import React from "react";
import "./Style.css";
import Data from "./Data.json";

export default function Card({ title, body }) {
  const productList = Data.products;

  return (
    <div  className={'arrange'}>
      {productList.map(function (role) {
        return (
          <div>
            <div className="card-container">
              <div className="image-container">
                <img src={"./assets/cloth.png"} alt="" />
              </div>
              <div className={"card-title"}>
                <h3>{role.name}</h3>
              </div>
              <div className={"card-body"}>
                <p>{role.colour}</p>
              </div>
              <div className={"btn"}>
                <button>Details</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

