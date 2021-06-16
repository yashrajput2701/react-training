import React, { useState } from "react";
import "./style.css";
export default function Editscreen(props) {
  const [searchedModel, setSearchedModel] = useState(props.model);
  const CarsData = JSON.parse(localStorage.getItem("CarsData"));
  console.log(props.model);
  const objectModel = CarsData.find((current) => {
    return current.Name === searchedModel;
  });

  const modelIndex = CarsData.findIndex((current) => {
    return current.Name === searchedModel;
  });
  console.log(objectModel);
  const [CarName, setCarName] = useState(objectModel.Name);
  console.log(CarName);
  console.log(objectModel.Name);
  const handleSaveData = () => {
    const NameVal = document.getElementById("Name").value;

    if (NameVal !== "") {
      CarsData[modelIndex].Name = NameVal;
      setSearchedModel(NameVal);
      setCarName(NameVal);
    }
    localStorage.setItem("CarsData", JSON.stringify(CarsData));
  };

  return (
    <div className={"main"}>
      <div className={"editscreen"}>
        <table>
          <tr>
            <th>{"Name"}</th>
          </tr>
          <tr>
            <td>{CarName}</td>
          </tr>
        </table>
      </div>
      <div className={"form"}>
        <input
          type={"text"}
          id={"Name"}
          placeholder={CarsData[modelIndex].model}
        ></input>
        <button onClick={handleSaveData}>EDIT</button>
      </div>
    </div>
  );
}
