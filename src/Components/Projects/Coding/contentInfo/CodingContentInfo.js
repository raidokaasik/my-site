import React from "react";
import "./CodingContentInfo.css";
import Tag from "../tag/Tag.js";
import Line from "../../../UI/Line/BreakLine.js";

// Porgramming project's right side

const codingContentInfo = (props) => {
  return (
    <div className="coding-content-info">
      <h4>{props.title}</h4>
      <Line color="lightgray" height="1px" />
      <p>{props.description}</p>
      <Line color="lightgray" height="1px" />
      <div className="project-tags">
        {props.tags.map((item, index) => (
          <Tag key={index} name={item} />
        ))}
      </div>
    </div>
  );
};

export default codingContentInfo;
