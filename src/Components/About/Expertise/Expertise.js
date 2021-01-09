import React from "react";
import "./Expertise.css";
import ExpertiseCard from "../Expertisecard/ExpertiseCard.js";

const expertise = () => {
  const skillList = [
    "ADOBE PHOTOSHOP",
    "ADOBE ILLUSTRATOR",
    "BLENDER 2.8+",
    "ZBRUSH",
    "MARMOSET TOOLBAG 3",
    "SUBSTANCE PAINTER",
  ];
  const skills = skillList.map(item => <li>{item}</li>);

  return (
    <div className="expertise-container">
      <ExpertiseCard section="GRAPHICS" skill={skills} />
      <ExpertiseCard section="PROGRAMMING" skill="HTML5" />
    </div>
  );
};

export default expertise;
