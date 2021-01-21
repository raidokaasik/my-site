import React from "react";
import "./BreakLine.css";

const breakLine = (props) => {
  return (
    <div
      className="break-line"
      style={{ background: props.color, height: props.height }}
    ></div>
  );
};

export default breakLine;
