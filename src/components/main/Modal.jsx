import React from "react";

const Modal = ({ href }) => {
  return (
    <div className="modal" role="dialog" id="my_modal_8">
      <div className="modal-box">
        <video src={href}></video>
      </div>
    </div>
  );
};

export default Modal;
