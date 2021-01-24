import React from "react";
import "./Education.css";
import Card from "../Card/Card.js";
import ExpertiseCard from "../Expertisecard/ExpertiseCard.js";

const education = () => {
  const courseList = [
    "THE COMPLETE 2020 WEB DEVELOPMENT BOOTCAMP by Dr Angela Yu",
    "REACT - THE COMPLETE GUIDE by Academind",
  ];
  const courses = courseList.map((item) => <li>{item}</li>);
  return (
    <div className="education-container">
      <Card
        title="UNIVERSITY OF TARTU"
        position="B.A in Fine Arts"
        date="2009 September - 2012 June"
      />
      <Card
        title="VALI IT! COURSE"
        position="C# and .NET FRAMEWORK"
        date="2020 Februrary - 2020 April"
      />

      <Card title="ONLINE COURSES" position="Udemy" description={courses} />

      {/* <ExpertiseCard section="UDEMY COURSES" skill={courses} /> */}
    </div>
  );
};

export default education;
