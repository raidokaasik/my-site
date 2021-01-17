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
  const codingList = [
    "HTML5",
    "CSS3",
    "JS ES6",
    "REACT",
    "NODE JS",
    "MONGODB/MONGOOSE",
  ];

  const skills = skillList.map(item => <li>{item}</li>);
  const coding = codingList.map(item => <li>{item}</li>);

  return (
    <div className="expertise-container">
      <ExpertiseCard section="GRAPHICS" skill={skills} />
      <ExpertiseCard section="PROGRAMMING" skill={coding} />
    </div>
  );
};

export default expertise;
