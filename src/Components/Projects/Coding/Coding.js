import React from "react";
import "./Coding.css";
import CodingImage from "../../../images/Coding/project-1.jpg";
import CodingImage2 from "../../../images/Coding/project-2.jpg";

const coding = () => {
  return (
    <div className="coding-content">
      <div className="coding-content-info">
        <h4>Coding projects</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          repudiandae sapiente ex aliquam quibusdam similique vero recusandae
          consequatur minus iusto corporis!
        </p>
      </div>
      <div className="coding-content-items">
        <img src={CodingImage} alt="Project Image"></img>
        <div className="coding-content-overlay">
          <p>REACT PROJECT</p>
          <p style={{ fontSize: "32px" }}>CREATIVE WEBSITE</p>
          <div className="coding-content-overlay-buttons">
            <button>WEBSITE</button>
            <button>GITHUB</button>
          </div>
        </div>
      </div>

      <div className="coding-content-info2">
        <h4>Coding projects</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          repudiandae sapiente ex aliquam quibusdam similique vero recusandae
          consequatur minus iusto corporis!
        </p>
      </div>

      <div className="coding-content-items2">
        <img src={CodingImage2} alt="Project Image"></img>
      </div>
    </div>
  );
};

export default coding;
