import React from "react";
import "./Backdrop.css";

const backDrop = props => {
  return <div onClick={props.clicked} className="backdrop"></div>;
};

export default backDrop;
