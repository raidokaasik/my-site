import React from "react";
import "./Coding.css";

import CodingContentItem from "./contentItem/CodingContentItem.js";
import CodingContentInfo from "./contentInfo/CodingContentInfo.js";
import CodingImage from "../../../images/Coding/project-1.jpg";
import CodingImage2 from "../../../images/Coding/project-2.jpg";

const coding = () => {
  return (
    <div className="coding-content">
      <div className="coding-content-element">
        <CodingContentItem
          imageSource={CodingImage}
          smallTitle="REACT PROJECT"
          bigTitle="CREATIVE PROJECT"
          leftButton="WEBSITE"
          rightButton="GITHUB"
        />
        <CodingContentInfo
          title="BURGER BUILDER"
          description="Small size front-end study project made with React and Redux. Firebase
        is used for data storing."
        />
      </div>
      <div className="coding-content-element">
        <CodingContentItem
          imageSource={CodingImage}
          smallTitle="REACT PROJECT"
          bigTitle="CREATIVE PROJECT"
          leftButton="WEBSITE"
          rightButton="GITHUB"
        />
        <CodingContentInfo
          title="BURGER BUILDER"
          description="Small size front-end study project made with React and Redux. Firebase
        is used for data storing."
        />
      </div>
    </div>
  );
};

export default coding;
