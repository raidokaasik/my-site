import React, {Component} from "react";
import "./About.css";
import Portrait from "./Portrait/Portrait.js";
import Dot from "../Projects/UI elements/Dot/Dot.js";
import Line from "../Projects/UI elements/Line/BreakLine.js";
import Experience from "./Experience/Experience.js";
import Expertise from "./Expertise/Expertise.js";

class About extends Component {
  state = {
    experience: true,
    expertise: false,
    education: false,
  };

  experienceHandler = () => {
    this.setState({experience: true, expertise: false, education: false});
  };
  expertiseHandler = () => {
    this.setState({experience: false, expertise: true, education: false});
  };
  educationHandler = () => {
    this.setState({experience: false, expertise: false, education: true});
  };

  render() {
    return (
      <div id="about">
        {/* <div className="transition"></div> */}
        {/* <h1 id="about-heading-lg">ABOUT ME</h1> */}
        <div className="about-container">
          <div className="about-menu">
            <div className="about-title-and-arrow">
              <p id="about-heading-lg">ABOUT</p>
              <div className="arrow">></div>
            </div>
            <div className="about-menu-buttons">
              <button onClick={this.experienceHandler}>EXPERIENCE</button>
              <Dot />
              <button onClick={this.expertiseHandler}>EXPERTISE</button>
              <Dot />
              <button onClick={this.educationHandler}>EDUCATION</button>
              <Line />
            </div>
          </div>
          <h2 id="about-heading-sm">
            Hi! Let me introduce myself. My name is Raido Kaasik and i'm a
            designer and web-developer based in Estonia
          </h2>
          <div className="layout-grid">
            <div className="left">
              <div className="about-info">
                <div className="bio">
                  <Portrait />
                  <h3>BIO</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    id corrupti ipsam, voluptates sed aut mollitia magni nulla
                    repudiandae sapiente ex aliquam quibusdam similique vero
                    recusandae consequatur minus iusto corporis! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Eos id corrupti
                    ipsam, voluptates sed aut mollitia magni nulla repudiandae
                    sapiente ex aliquam quibusdam similique vero recusandae
                    consequatur minus iusto corporis!
                  </p>
                </div>
              </div>
              <div className="right"></div>
            </div>

            {this.state.experience ? <Experience /> : null}
            {this.state.expertise ? <Expertise /> : null}
            {/* {this.state.education ? <Education /> : null} */}

            {/* <div className="job job1">
            <h3>GAMELOFT</h3>
            <h5>Graphics Artist</h5>
            <h5>2018 April - 2020 May</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dolorum hic vero perferendis officiis ipsam. Nulla exercitationem
              unde iste tempore.
            </p>
          </div>
          <div className="job job2">
            <h3>Gameloft</h3>
            <h5>Graphics Artist</h5>
            <h5>2018 April - 2020 May</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dolorum hic vero perferendis officiis ipsam. Nulla exercitationem
              unde iste tempore.
            </p>
          </div>
          <div className="job job3">
            <h3>Gameloft</h3>
            <h5>Graphics Artist</h5>
            <h5>2018 April - 2020 May</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dolorum hic vero perferendis officiis ipsam. Nulla exercitationem
              unde iste tempore.
            </p>
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
