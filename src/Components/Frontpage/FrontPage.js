import React from "react";
import "./FrontPage.css";
// import ProgressiveImage from "react-progressive-image";
// const frontImage = require("../../images/image-9.jpg");

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
      <div className="progressive-loading-image">
        <div className="progressive-loading-image-scale">
          {/* <ProgressiveImage
            src={require("../../images/image-9.jpg")}
            placeholder={
              <img
                className="placeholderImage"
                src={require("../../images/image-9-tiny6.jpg")}
                alt="placeHolder"
              ></img>
            }
          >
            {(src, loading) => (
              <img
                style={{
                  filter: loading ? "blur(10px)" : "",
                  transition: "0.5s filter linear",
                }}
                src={src}
                alt="frontImage"
              />
            )}
          </ProgressiveImage> */}
          <img src={require("../../images/image-9.jpg")} alt="frontImage"></img>
        </div>
      </div>
      <div className="onload-image">
        <div className="onload-image-scale"></div>
      </div>
    </div>
  );
};

export default frontPage;
