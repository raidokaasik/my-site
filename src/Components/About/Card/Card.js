import React from "react";
import "./Card.css";

const card = props => {
  return (
    <div className="job">
      <h3>{props.title}</h3>
      <h5>{props.position}</h5>
      <h5>{props.date}</h5>
      <p>{props.description}</p>
    </div>
  );
};

export default card;
