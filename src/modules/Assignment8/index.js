import React, {  useState } from "react";
import './Style.css';
import Modal from'react-modal';
function Assignment8(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={"mainwrapper"}>
            <h2>STUDENT DETAILS</h2>
        <button onClick={() => setModalIsOpen(true)}>Student Details</button>
          <Modal isOpen={modalIsOpen}>
          
          <h2>STUDENT DETAILS</h2>
          <form className={"mainform"} >
      <div className={"form"}>
        <input
         type="text"
         name="fname"
         placeholder={"Firstname"}
         
         />
         <span className={"errormessage"}></span>
      </div>
      <div className={"form"}>
        <input
         type="text"
         name="lname"
         placeholder={"Lastname"}
         
         />
         <span className={"errormessage"}></span>
      </div>
      <div className={"form"}>
        <input
         type="text"
         name="Email"
         placeholder={"Enter your Email"}
         
         />
         <span className={"errormessage"}></span>
      </div>
      <div className={"form"}>
        <input
         type="number"
         name="roll no"
         placeholder={"Enter roll no "}
        
         />
         <span className={"errormessage"}></span>
      </div>
      <div className={"form"}>
        <input
         type="number"
         name="Year"
         placeholder={"Enter your year"}
         
         />
         <span className={"errormessage"}></span>
      </div>
    </form>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
          
          </Modal>
          </div>
        
     
    );
  }

export default Assignment8;
