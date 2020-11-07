import React from "react";
import "./MenuButton.css";

const menuButton = props => {
  return (
    <div className="menu-btn" onClick={props.clicked}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  );
};

export default menuButton;
