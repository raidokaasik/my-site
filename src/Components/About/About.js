import React, { Component } from "react";
import "./About.css";
import Portrait from "./Portrait/Portrait.js";
import Dot from "../UI/Dot/Dot.js";
import Line from "../UI/Line/BreakLine.js";
import Education from "./Education/Education.js";
import Experience from "./Experience/Experience.js";
import Expertise from "./Expertise/Expertise.js";

class About extends Component {
  state = {
    experience: true,
    expertise: false,
    education: false,
  };

  experienceHandler = () => {
    this.setState({ experience: true, expertise: false, education: false });
  };
  expertiseHandler = () => {
    this.setState({ experience: false, expertise: true, education: false });
  };
  educationHandler = () => {
    this.setState({ experience: false, expertise: false, education: true });
  };

  render() {
    return (
      <div id="about">
        <div className="about-container">
          <div className="about-menu">
            <div className="about-title-and-arrow">
              <p id="about-heading-lg">ABOUT</p>
              <div className="arrow">></div>
            </div>
            <div className="about-menu-buttons">
              <button
                className={
                  this.state.experience ? "about-button active" : "about-button"
                }
                onClick={this.experienceHandler}
              >
                EXPERIENCE
              </button>
              <Dot />
              <button
                className={
                  this.state.education ? "about-button active" : "about-button"
                }
                onClick={this.educationHandler}
              >
                EDUCATION
              </button>
              <Dot />
              <button
                className={
                  this.state.expertise ? "about-button active" : "about-button"
                }
                onClick={this.expertiseHandler}
              >
                SKILLS
              </button>
              <Line />
            </div>
          </div>
          <h2 id="about-heading-sm">
            Hi! My name is Raido Kaasik, and i'm a senior concept-artist for
            Gameloft and a web-developer based in Estonia
          </h2>

          <div className="layout-grid">
            <div className="about-info">
              <Portrait />
              <h3>BIO</h3>

              <p>
                I have worked past 8 years as concept-artist in mobile game
                industry and lived most of that time in Hungary and Romania.
              </p>
            </div>
            <div className="about-content">
              {this.state.experience ? <Experience /> : null}
              {this.state.expertise ? <Expertise /> : null}
              {this.state.education ? <Education /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
