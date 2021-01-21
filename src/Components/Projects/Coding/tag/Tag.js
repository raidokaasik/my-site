import React from "react";
import "./Tag.css";

const tag = (props) => {
  return (
    <div className="tag" style={{ background: props.color }}>
      {props.name}
    </div>
  );
};

export default tag;
