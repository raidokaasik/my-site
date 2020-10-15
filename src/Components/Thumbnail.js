import React from "react";
import {Link} from "react-router-dom";

const thumbnail = props => {
  return (
    <div className="work">
      <Link to={props.link}>
        <div className="work-image">
          <img src={props.image} alt="Project Image" />
        </div>
        <div className="work-title">{props.title}</div>
        <div className="work-description">{props.description}</div>
      </Link>
    </div>
  );
};

export default thumbnail;
