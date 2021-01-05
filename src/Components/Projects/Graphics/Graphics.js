<<<<<<< HEAD
import React from "react";
import GraphicsData from "../../../Data/GraphicsData.js";
import Graphics07 from "../../../img/Graphics/Graphics_07.jpg";
import Graphics01 from "../../../img/Graphics/Graphics_01.jpg";
import Graphics08 from "../../../img/Graphics/Graphics_08.jpg";
import Graphics03 from "../../../img/Graphics/Graphics_03.jpg";
import Graphics04 from "../../../img/Graphics/Graphics_04.jpg";
import Graphics05 from "../../../img/Graphics/Graphics_05.jpg";
import Graphics06 from "../../../img/Graphics/Graphics_06.jpg";
=======
import React, { Fragment, useState, useEffect } from "react";
>>>>>>> 910ba281090f131da22b0256ce1d084ad71e24b9
import "./Graphics.css";
import GraphicsData from "../../../Data/imageData.js";
import Backdrop from "../../UI/Backdrop/Backdrop.js";
import Modal from "../../UI/Modal/Modal.js";

<<<<<<< HEAD
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
=======
function Graphics(props) {
  const [currentImage, setCurrentImage] = useState({});
  const [modal, setModal] = useState(false);
  const [backDrop, setBackDrop] = useState(false);
  const [count, setCount] = useState(0);

  const modalHandler = (item) => {
    setModal(!modal);
    setBackDrop(!backDrop);
    setCurrentImage(item);
    setCount(item.nr);
    console.log(currentImage);
  };

  const prevImageHandler = () => {
    if (currentImage.nr > 1) {
      setCurrentImage(
        GraphicsData.filter((item) => {
          return (
            item.nr < GraphicsData.length && item.nr === currentImage.nr - 1
          );
        }).reduce((el, el2) => el2, {})
      );
    }
    console.log(currentImage.nr);
  };

  const nextImageHandler = () => {
    if (currentImage.nr !== GraphicsData.length) {
      setCurrentImage(
        GraphicsData.filter((item) => {
          return (
            item.nr < GraphicsData.length + 1 && item.nr === currentImage.nr + 1
          );
        }).reduce((el, el2) => el2, {})
      );
    }
    console.log(currentImage.nr);
  };

  const images = GraphicsData.map((item, index) => {
    return (
      <div
        key={index + item}
        className="image-3d"
        onClick={() => modalHandler(item)}
      >
        <div className="image-overlay">
          <h1>See more</h1>
        </div>
        <img
          className="image"
          src={require(`../../../images/Graphics/ThumbnailImages/${item.name}.jpg`)}
          alt="nice"
        ></img>
      </div>
    );
  });

  return (
    <Fragment>
      {modal
        ? GraphicsData.map((item, index) => {
            return (
              <Modal
                key={item + index}
                close={modalHandler}
                next={nextImageHandler}
                prev={prevImageHandler}
              >
                <img
                  src={require(`../../../images/Graphics/${currentImage.name}.jpg`)}
                  alt="nice"
                ></img>
              </Modal>
            );
          })
        : null}
      {backDrop ? <Backdrop clicked={modalHandler} /> : null}
      <div className="graphics-content">
        {/* <div className="graphics-content-info">
          <h4>Graphics projects</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            repudiandae sapiente ex aliquam quibusdam similique vero recusandae
            consequatur minus iusto corporis!
          </p>
          <h4 className="graphics-title">
            Title: <span>Tacticraft Buildings</span>
          </h4>
          <hr />
        </div> */}
        <div className="graphics-content-items">{images}</div>
>>>>>>> 910ba281090f131da22b0256ce1d084ad71e24b9
      </div>
    </Fragment>
  );
}

export default Graphics;
