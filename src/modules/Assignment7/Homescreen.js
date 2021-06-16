import React, { useState } from "react";
import "./style.css";
import Editscreen from "./Editscreen";
import dummyData from "./Data";
export default function Homescreen() {
  const [isHomescreen, setIsHomescreen] = useState(true);
  const [Name, setName] = useState("");

  if (localStorage.getItem("CarsData") === null) {
    localStorage.setItem("CarsData", JSON.stringify(dummyData.cars));
  }
  console.log(dummyData.cars);

  const CarsData = JSON.parse(localStorage.getItem("CarsData"));

  const checkHomescreen = () => {
    setIsHomescreen(false);
  };

  return (
    <>
      {isHomescreen ? (
        <div className="wrapper">
          <div className="form-wrapper">
            <h2>HOMESCREEN</h2>
            <div className="custom-select">
              <select
                id={"keyModel"}
                placeholder={"Select a Car"}
                className={"selectPicker"}
                required
                onChange={(event) => setName(event.target.value)}
              >
                <option value="">{"Select a Car"}</option>

                {CarsData.map((current, index) => {
                  return (
                    <option key={index} value={current.Name}>
                      {current.Name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="submit">
              <button onClick={checkHomescreen}>SUBMIT</button>
            </div>
          </div>
        </div>
      ) : (
        <Editscreen model={Name} />
      )}
    </>
  );
}
