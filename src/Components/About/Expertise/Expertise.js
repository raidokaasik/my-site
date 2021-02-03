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
  const codingList = ["HTML5", "CSS3", "JS ES6", "REACT"];
  const serviceList = [
    "Concept art Development",
    "Mobile game Development",
    "3D Concepting",
    "3D Modelling(low-high poly)",
    "Texture Painting",
  ];
  const services = serviceList.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  const skills = skillList.map((item, index) => <li key={index}>{item}</li>);
  const coding = codingList.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className="expertise-container">
      <ExpertiseCard section="GRAPHICS SOFTWARE" skill={skills} />
      <ExpertiseCard section="SERVICES" skill={services} />
      <ExpertiseCard section="PROGRAMMING" skill={coding} />
    </div>
  );
};

export default expertise;
