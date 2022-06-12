import React from "react";
import ReactDOM from "react-dom";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

const Modal = ({ onToggle }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-container">
        <div className="modal-box">
          <div className="modal__header">
            <h1>Rules</h1>
            <button onClick={onToggle}>
              <img src={close} alt="close" />
            </button>
          </div>
          <div>
            <img src={rules} alt="rules" />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
