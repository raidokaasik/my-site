import React from "react";
import GraphicsData from "../../../Data/GraphicsData.js";
import Graphics07 from "../../../img/Graphics/Graphics_07.jpg";
import Graphics01 from "../../../img/Graphics/Graphics_01.jpg";
import Graphics08 from "../../../img/Graphics/Graphics_08.jpg";
import Graphics03 from "../../../img/Graphics/Graphics_03.jpg";
import Graphics04 from "../../../img/Graphics/Graphics_04.jpg";
import Graphics05 from "../../../img/Graphics/Graphics_05.jpg";
import Graphics06 from "../../../img/Graphics/Graphics_06.jpg";
import "./Graphics.css";

const graphics = props => {
  const images = require("./img/Graphics/Graphics_01.jpg");
  // const images = GraphicsData.map(item => {
  //   return (
  //     <div
  //       onClick={props.clicked}
  //       className="image-3d"
  //       style={{background: "blue"}}
  //     >
  //       <img src={require(`./${item.name}.jpg`)} alt="Nice picture"></img>
  //     </div>
  //   );
  // });
  return (
    <div className="graphics-content">
      {/* <div className="graphics-content-info">
        <h4>Graphics projects</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          repudiandae sapiente ex aliquam quibusdam similique vero recusandae
          consequatur minus iusto corporis!
        </p>
      </div> */}
      <div className="graphics-content-items">
        {images}
        {/* <h1>Coming soon!</h1> */}

        {/* {GraphicsData.map(item => {
          return (
            <div
              onClick={props.clicked}
              className="image-3d"
              style={{background: "blue"}}
            >
              <img
                src={require(`./Graphics/${item.name}.jpg`)}
                alt="Nice picture"
              ></img>
            </div>
          );
        })} */}

        {/* <div className="image-3d" style={{background: "brown"}}>
          <img src={Graphics08} alt="Nice picture"></img>
        </div>
        <div className="image-3d" style={{background: "yellow"}}>
          <img src={Graphics03} alt="Nice picture"></img>
        </div>
        <div className="image-3d" style={{background: "red"}}>
          <img src={Graphics04} alt="Nice picture"></img>
        </div>
        <div className="image-3d" style={{background: "gray"}}>
          <img src={Graphics05} alt="Nice picture"></img>
        </div>
        <div className="image-3d" style={{background: "purple"}}>
          <img src={Graphics06} alt="Nice picture"></img>
        </div>
        <div className="image-3d" style={{background: "green"}}>
          <img src={Graphics01} alt="Nice picture"></img>
        </div>
        <div className="image-3d" style={{background: "lightBlue"}}>
          black
        </div> */}
      </div>
    </div>
  );
};

export default graphics;
