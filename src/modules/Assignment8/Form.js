import React from "react";

export default function DataForm(props) {
  return (
    <form className={"form"} onSubmit={props.submit}>
      <div className={"formInput"}>
        <input
          type="text"
          name={props.fname}
          placeholder={props.placeholderFname}
          value={props.fnameValue}
          onChange={props.change}
        />
        
      </div>
      <div className={"formInput"}>
        <input
          type="text"
          name={props.lname}
          placeholder={props.placeholderLname}
          value={props.lnameValue}
          onChange={props.change}
        />
        
      </div>
      <div className={"formInput"}>
        <input
          type="email"
          name={props.email}
          placeholder={props.placeholderEmail}
          value={props.emailValue}
          onChange={props.change}
        />
       
      </div>
    
        
      

      <div className={"btnSection"}>
        <button className={"btn"} type="submit">
          {props.formButton}
        </button>
        <button className={"btn Cancel"} onClick={() => props.setModal(false)}>
          {"Cancel"}
        </button>
      </div>
    </form>
  );
}