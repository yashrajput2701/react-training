import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Form from "./Form";

export default function ModalComponent(props) {
  const [inputValues, setInputValues] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  useEffect(() => {
    if (props.formType === "EDIT") {
      setInputValues(props.data[props.ArrayIndex]);
    }
  }, [props.formType]);

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !inputValues.fname &&
      !inputValues.lname &&
      !inputValues.email 
    ) 
    {}
  };

  const handleEdit = (e) => {
    e.preventDefault();
    props.modalOpen(false);
    props.setFormType();
    handleEditData(inputValues, props.ArrayIndex);
  };

  const handleEditData = (editedArray, index) => {
    props.data[index] = editedArray;
    props.setData(props.data);
  };

  return (
    <Modal
      className={"modalContainer"}
      isOpen={props.ModalOpen}
      onRequestClose={() => props.modalOpen(false)}
    >
      <h2>
        <span className={"primaryColor"}>{props.formType}</span>
        {" Data"}
      </h2>
      {props.formType === "ADD" && (
        <Form
          fname={"fname"}
          lname={"lname"}
          email={"email"}
          placeholderFname={"Enter First Name"}
          placeholderLname={"Enter Last Name"}
          placeholderemail={"Enter your email"}
          submit={handleSubmit}
          change={handleChange}
          formButton={"Add"}
          setModal={props.setModal}
          data={props.data}
          setData={props.setData}
        />
      )}
      {props.formType === "EDIT" && (
        <Form
          fname={"fname"}
          lname={"lname"}
          email={"email"}
          placeholderFname={props.data[props.ArrayIndex].fname}
          placeholderLname={props.data[props.ArrayIndex].lname}
          placeholderemail={props.data[props.ArrayIndex].email}
          submit={handleEdit}
          change={handleChange}
          formButton={"Edit"}
          setModal={props.setModal}
          data={props.data}
          setData={props.setData}
        />
      )}
    </Modal>
  );
}