import React from "react";
import "./FrontPage.css";
import { Defer } from "react-progressive-loader";
const frontImage = require("../../images/image-9.jpg");

const placeholderImage2 = require("../../images/image-9-tiny5.jpg");

const frontPage = () => {
  return (
    // Name and Social media Icons

    <div className="frontimage-container">
      <div className="front-header">
        <div className="front-title">
          <h1 className="name-primary">
            RAIDO <span className="name-secondary">KAASIK</span>
          </h1>
        </div>
        <div className="front-description">A designer/ developer</div>
        <div className="social-media">
          <a
            href="https://www.artstation.com/sipowich"
            className="social-media-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-artstation"></i>
          </a>
          <a
            href="https://github.com/raidokaasik"
            className="social-media-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/raido_kaasik/"
            className="social-media-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/raidokaasik/"
            className="social-media-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <Defer
        render={() => <img src={frontImage} alt="frontPage"></img>}
        renderPlaceholder={() => (
          <img src={placeholderImage2} alt="placeholder"></img>
        )}
        loadOnScreen
      />
      {/* <Img
        src="../../images/image-9.jpg"
        placeholderSrc="../../images/image-9-tiny3.jpg"
      /> */}
      {/* <img src={frontImage} alt="frontPage"></img> */}
    </div>
  );
};

export default frontPage;
