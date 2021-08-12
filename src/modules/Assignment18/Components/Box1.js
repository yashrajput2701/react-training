import React, { useState } from "react";
import "../index.css";


export default function Box1() {


const {useState, Fragment} = React

  const [count, setCount] = useState(0)
  const AddedElement = () => <p> <textarea
  type="text"
  id="outlined-basic"
  label="Outlined"
  variant="outlined"
  className={"input"}
  name="item1"
  value={item1}
  onChange={handleChange}
  placeholder="Enter JSON keys"
  required
/></p>
  const [data, setData] = useState({
    item1: "",
    item2: "",
    item3: "",
  });
  const { item1, item2, item3 } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const downloadTxtFile = (data) => {
    const element = document.createElement("a");
    const file = new Blob(["{\n" + data + "}"], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  const handleSubmit = async (e) => {
    var data = "";
    var showData = "";
    if (item1.split("\n").length == item2.split("\n").length) {
      for (var i = 0; i < item1.split("\n").length; i++) {
        data =
          data +
          '"' +
          item1.split("\n")[i] +
          '":"' +
          item2.split("\n")[i] +
          '",\n';
        showData =
          showData +
          (i + 1) +
          ': "' +
          item1.split("\n")[i] +
          '":"' +
          item2.split("\n")[i] +
          '",\n';
      }
      setData({ item3: showData });
      downloadTxtFile(data);
    } else {
      alert(
        "Data is incorrect please make sure both fields have same number of data"
      );
    }
  };
  return (
    <div className={"mainwrapper"}>
      <h1 className={"heading"}>Create and download JSON</h1>
      <div className={"root"} noValidate autoComplete="off">
      <Fragment>
        <button className={"button2"} onClick={() => setCount(count + 1)}>+ ADD</button>
        { [...Array(count)].map((_, i) => <AddedElement key={i} />) }
        </Fragment>
        <textarea
          type="text"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className={"input"}
          name="item1"
          value={item1}
          onChange={handleChange}
          placeholder="Enter JSON keys"
          required
        />
        <textarea
          type="text"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          className={"input"}
          name="item2"
          value={item2}
          onChange={handleChange}
          placeholder="Enter JSON values"
          required
        />

        <textarea
          type="text"
          id="item3"
          label="Outlined"
          variant="outlined"
          className={"input"}
          name="item3"
          value={item3}
          onChange={handleChange}
          placeholder="Resultant JSON"
        />
   
        
      </div>
      <div className={'submit'}>
        <button type="submit" onClick={handleSubmit} className={"button"}>
          Submit
        </button>
        
      
      </div>
    </div>
  );
}
