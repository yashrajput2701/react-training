import React from "react";
import Modal from "react-modal";

export default function DeleteModal(props) {
  const deleteItem = () => {
    props.setDeleteModal();
    props.handleDelete(props.arrIndex);
  };

  return (
    <Modal
      className={"deleteModal"}
      isOpen={props.deleteModal}
      onRequestClose={() => props.setDeleteModal()}
    >
      <p>
        {"Click Yes To"}
        <span className={"primaryColor"}>{"Delete"}</span> {"the Data?"}
      </p>
      <div className={"btnSection"}>
        <button className={"btn yes "} onClick={() => deleteItem()}>
          {"YES"}
        </button>
        <button className={"btn yes Cancel "} onClick={() => props.setDeleteModal()}>
          {"No"}
        </button>
      </div>
    </Modal>
  );
}