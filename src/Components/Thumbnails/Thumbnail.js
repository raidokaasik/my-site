import React from "react";
import {Link} from "react-router-dom";
import "./Thumbnail.css";

const thumbnail = props => {
  return (
    <Link
      to={props.link}
      className="                                                                                                                                                                                                                                                                                                                                     ;"
    >
      <div className="frame">
        <img className="work-image" src={props.image} alt="Project Image" />

        {/* <div className="work-title">{props.title}</div>
        <div className="work-description">{props.description}</div> */}
      </div>
    </Link>
  );
};

export default thumbnail;
