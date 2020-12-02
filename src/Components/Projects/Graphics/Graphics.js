import React from "react";
import "./Graphics.css";
import GraphicsData from "../../../Data/imageData.js";

const graphics = () => {
  const images = GraphicsData.map(item => {
    return (
      <div className="image-3d">
        <img
          // src={require("../../../images/portrait.jpg")}
          src={require(`../../../images/Graphics/${item.name}.jpg`)}
          alt="nice"
        ></img>
      </div>
    );
  });

  return (
    <div className="graphics-content">
      <div className="graphics-content-info">
        <h4>Graphics projects</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          repudiandae sapiente ex aliquam quibusdam similique vero recusandae
          consequatur minus iusto corporis!
        </p>
      </div>
      <div className="graphics-content-items">
        {images}
        {/* <div className="image-3d">
          <img
            src={require("../../../images/portrait.jpg")}
            alt="nice picture"
          ></img>
        </div> */}
      </div>
    </div>
  );
};

export default graphics;
