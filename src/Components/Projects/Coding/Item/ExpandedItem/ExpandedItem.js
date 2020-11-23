import React from "react";
import "./ExpandedItem.css";
import axios from "axios";

const expandedItem = props => {
  return (
    <div className="expanded-item" onClick={props.clicked}>
      <h2>Bigger React Project</h2>
    </div>
  );
};

export default expandedItem;
