import React from "react";
import "./Modal.css";

const modal = (props) => (
  <div className="modal">
    <div className="modal-buttons-left">
      <div onClick={props.prev} className="modal-prev">
        <i className="fas fa-chevron-left"></i>
      </div>
    </div>
    <div className="modal-content">{props.children}</div>
    <div className="modal-buttons-right">
      <div onClick={props.close} className="modal-close">
        <i className="far fa-times-circle"></i>
      </div>
      <div onClick={props.next} className="modal-next">
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
);

export default modal;
