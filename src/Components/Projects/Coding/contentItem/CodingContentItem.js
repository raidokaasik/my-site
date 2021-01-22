import React from "react";
import "./CodingContentItem.css";

const codingContentItem = (props) => {
  return (
    <div className="coding-content-item">
      <img src={props.imageSource} alt="coding"></img>
      <div className="coding-content-overlay">
        <p className="small-title">{props.smallTitle}</p>
        <p className="big-title">{props.bigTitle}</p>
        <div className="coding-content-overlay-buttons">
          <button>{props.leftButton}</button>
          <button>{props.rightButton}</button>
        </div>
      </div>
    </div>
  );
};

export default codingContentItem;