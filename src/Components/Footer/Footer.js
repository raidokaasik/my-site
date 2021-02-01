import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <div id="f-container">
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
      <p>Copyright &copy; 2020</p>
    </div>
  );
};

export default footer;
