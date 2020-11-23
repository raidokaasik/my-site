import React from "react";
import "./Item.css";

const item = props => {
  return (
    <div className="test" onClick={props.clicked}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default item;
