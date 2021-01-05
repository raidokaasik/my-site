import React, { Component, Fragment } from "react";
import "./ProjectContainer.css";
import Graphics from "./Graphics/Graphics.js";
import Coding from "./Coding/Coding.js";
import Ui from "./Ui/Ui.js";
import Dot from "./UI elements/Dot/Dot.js";
import Line from "./UI elements/Line/BreakLine.js";

class ProjectContainer extends Component {
  state = {
    graphics: false,
    coding: true,
    ui: false,
  };

  graphicsHandler = () => {
    this.setState({ graphics: true, coding: false, ui: false });
  };
  codingHandler = () => {
    this.setState({ graphics: false, coding: true, ui: false });
  };
  uiHandler = () => {
    this.setState({ graphics: false, coding: false, ui: true });
  };

  modalHandler = () => {
    this.setState({ modal: !this.state.modal });
    this.setState({ backDrop: !this.state.backDrop });
  };

  render() {
    return (
      <div id="projects">
        <div className="project-header"></div>
        <div id="project-main">
          <div className="project-container">
            <div className="project-menu-buttons">
              <div className="container-title-and-arrow">
                <p>PROJECTS</p>
                <div className="arrow">></div>
              </div>
              <div className="buttons-only">
                <button
                  className={
                    this.state.coding ? "menu-button active" : "menu-button"
                  }
                  onClick={this.codingHandler}
                >
                  PROGRAMMING
                </button>
                <Dot />
                <button
                  className={
                    this.state.graphics ? "menu-button active" : "menu-button"
                  }
                  onClick={this.graphicsHandler}
                >
                  3D
                </button>
                <Dot />
                <button
                  className={
                    this.state.ui ? "menu-button active" : "menu-button"
                  }
                  onClick={this.uiHandler}
                >
                  UI
                </button>
                <Line />
              </div>
            </div>
            {this.state.graphics ? (
              <Graphics clicked={this.modalHandler} />
            ) : null}
            {this.state.coding ? <Coding /> : null}
            {this.state.ui ? <Ui /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
