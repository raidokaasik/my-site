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
          <a
            href={props.websiteURL}
            target="_blank"
            rel="noopener noreferrer"
            className="website-link"
          >
            {props.rightButton}
            <i className="fas fa-eye"></i>
          </a>
          <a
            href={props.githubURL}
            rel="noopener noreferrer"
            target="_blank"
            className="github-link"
          >
            {props.leftButton}
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default codingContentItem;
