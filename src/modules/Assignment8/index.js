import React, { useState } from "react";
import "./Style.css";
import Modal from "react-modal";
function Assignment8() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={"mainwrapper"}>
      <h2 className={"heading"}>STUDENT DETAILS</h2>
      <button onClick={() => setModalIsOpen(true)}>Student Details</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2 className={"heading"}>STUDENT DETAILS</h2>
        <form className={"mainform"}>
          <h3>First name</h3>
          <div className={"form"}>
            <input type="text" name="fname" placeholder={"Firstname"} />
            <span className={"errormessage"}></span>
          </div>
          <h3>Last name</h3>
          <div className={"form"}>
            <input type="text" name="lname" placeholder={"Lastname"} />
            <span className={"errormessage"}></span>
          </div>
          <h3>Email</h3>
          <div className={"form"}>
            <input type="text" name="Email" placeholder={"Enter your Email"} />
            <span className={"errormessage"}></span>
          </div>
          <h3>Roll no</h3>
          <div className={"form"}>
            <input
              type="number"
              name="roll no"
              placeholder={"Enter roll no "}
            />
            <span className={"errormessage"}></span>
          </div>
          <h3>Year</h3>
          <div className={"form"}>
            <input type="number" name="Year" placeholder={"Enter your year"} />
            <span className={"errormessage"}></span>
          </div>
        </form>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default Assignment8;
