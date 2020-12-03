import React from "react";
import "./Modal.css";

const modal = props => (
  <div className="modal">
    <div className="modal-content">{props.children}</div>
    <div className="modal-buttons">
      <button className="modal-prev">previous</button>
      <button className="modal-next">next</button>
      <button className="modal-close">close</button>
    </div>
  </div>
);

export default modal;
