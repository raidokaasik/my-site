import React, { Fragment, useState } from "react";
import "./Graphics.css";
import GraphicsData from "../../../Data/imageData.js";
import Backdrop from "../../../Components/UI/Backdrop/Backdrop.js";
import Modal from "../../../Components/UI/Modal/Modal.js";

function Graphics() {
  const [currentImage, setCurrentImage] = useState({});
  const [modal, setModal] = useState(false);
  const [backDrop, setBackDrop] = useState(false);
  const [count, setCount] = useState(0);

  const modalHandler = (item) => {
    setModal(!modal);
    setBackDrop(!backDrop);
    setCurrentImage(item);
    setCount(item.nr);
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
  };

  const images = GraphicsData.map((item, index) => {
    return (
      <div
        key={index + item}
        className="image-3d"
        onClick={() => modalHandler(item)}
      >
        <div className="image-overlay">
          <h5>BLENDER, PHOTOSHOP</h5>
          <p>LOREM IPSUM</p>
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
        <div className="graphics-content-items">{images}</div>
      </div>
    </Fragment>
  );
}

export default Graphics;
