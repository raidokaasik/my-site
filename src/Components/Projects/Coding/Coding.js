import React from "react";
import "./Coding.css";
import CodingContentItem from "./contentItem/CodingContentItem.js";
import CodingContentInfo from "./contentInfo/CodingContentInfo.js";
import data from "../../../Data/Data.js";

const coding = () => {
  const codingProjects = data.map((item) => {
    return (
      <div className="coding-content-element" key={item.id}>
        <CodingContentItem
          key={item.id}
          imageSource={require(`../../../images/Coding/` + item.logo)}
          smallTitle={item.label}
          bigTitle={item.title}
          leftButton="GITHUB"
          rightButton="WEBSITE"
          websiteURL={item.website}
          githubURL={item.github}
        />
        <CodingContentInfo
          title={item.title}
          description={item.info}
          tags={item.tags}
        />
      </div>
    );
  });

  return <div className="coding-content">{codingProjects}</div>;
};

export default coding;
