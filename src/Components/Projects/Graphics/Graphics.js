import React from "react";
import Thumbnail from "../Components/Projects/Graphics/Thumbnails/Thumbnail";
import "./Graphics.css";

const graphics = () => {
  return (
    <div className="graphics-container">
      <h1>Graphics</h1>
      <div className="graphics-grid">
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

export default graphics;
