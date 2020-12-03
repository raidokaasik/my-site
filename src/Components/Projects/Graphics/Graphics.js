import React from "react";
import "./Graphics.css";
import GraphicsData from "../../../Data/imageData.js";

const graphics = props => {
  const images = GraphicsData.map(item => {
    return (
      <div className="image-3d" onClick={props.clicked}>
        <img
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
        <h4>Title:</h4>
        <hr />
      </div>
      <div className="graphics-content-items">{images}</div>
    </div>
  );
};

export default graphics;
