import React from "react";
import "./ExpertiseCard.css";

const expertiseCard = props => {
  return (
    <div className="expertise-card">
      <h3>{props.section}</h3>
      <h5>{props.skill}</h5>
    </div>
  );
};

export default expertiseCard;
