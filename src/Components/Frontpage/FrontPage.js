import React from "react";
import "./FrontPage.css";

const frontPage = () => {
  return (
    <div className="frontimage-container">
      <div className="front-header">
        <div className="front-title">
          <h1 className="name-primary">
            RAIDO <span className="name-secondary">KAASIK</span>
          </h1>
        </div>
        <div className="front-description">A developer and a designer</div>
        <div className="social-media">
          <div className="social-media-icon">
            <i className="fab fa-facebook"></i>
          </div>
          <div className="social-media-icon">
            <i className="fab fa-github"></i>
          </div>
          <div className="social-media-icon">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="social-media-icon">
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default frontPage;
