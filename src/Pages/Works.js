import React from "react";
import Thumbnail from "../Components/Thumbnails/Thumbnail";
import "./Works.css";

const works = () => {
  return (
    <div className="project-container">
      <h1>Works</h1>

      <h1>Projects</h1>
      <div className="project-grid">
        <Thumbnail link="/project2" image="img/beetle.jpg" title="Mern Stack" />
        <Thumbnail link="/project2" image="img/beetle.jpg" title="Mern Stack" />
        <Thumbnail link="/project2" image="img/beetle.jpg" title="Mern Stack" />
        <Thumbnail link="/project2" image="img/beetle.jpg" title="Mern Stack" />
        <Thumbnail link="/project2" image="img/beetle.jpg" title="Mern Stack" />
        <Thumbnail link="/project2" image="img/beetle.jpg" title="Mern Stack" />
      </div>
    </div>
  );
};

export default works;
