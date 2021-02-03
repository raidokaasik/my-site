import React from "react";
import "./Education.css";
import Card from "../Card/Card.js";

const courseList = [
  "The Complete web development Bootcamp by Dr Angela Yu",
  "React - Complete Guide by Academind & Maximilian Schwarzmüller",
];

const education = () => {
  const courses = courseList.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className="education-container">
      <Card
        title="UNIVERSITY OF TARTU"
        position="B.A in Fine Arts"
        date="2009 September - 2012 June"
        description="Studies of classical figurative painting and composition"
      />
      <Card
        title="VALI IT! COURSE"
        position="C# and .NET FRAMEWORK"
        date="2020 Februrary - 2020 April"
        description="Crash-course of C#, .NET Framework and MVC project development"
      />

      <Card title="ONLINE COURSES" position="Udemy" description={courses} />
    </div>
  );
};

export default education;
