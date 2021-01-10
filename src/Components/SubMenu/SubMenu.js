import React from "react";
import { Component } from "react";
import Dot from "../Projects/UI elements/Dot/Dot.js";
import Line from "../Projects/UI elements/Line/Line.js";
import "./SubMenu.css";

class Submenu extends Component {
  state = {
    middle: this.props.middleButton,
    left: this.props.leftButton,
    right: this.props.rightButton,
  };
  //   graphicsHandler = () => {
  //     this.setState({ graphics: true, coding: false, ui: false });
  //   };
  //   codingHandler = () => {
  //     this.setState({ graphics: false, coding: true, ui: false });
  //   };
  //   uiHandler = () => {
  //     this.setState({ graphics: false, coding: false, ui: true });
  //   };

  render() {
    return (
      <div className="project-menu-buttons">
        <div className="container-title-and-arrow">
          <p>{this.props.subMenuTitle}</p>
          <div className="arrow">></div>
        </div>
        <div className="buttons-only">
          <button
            className={this.state.left ? "menu-button active" : "menu-button"}
            onClick={this.props.leftButtonHandler}
          >
            {this.props.leftButtonTitle}
          </button>
          <Dot />
          <button
            className={this.state.middle ? "menu-button active" : "menu-button"}
            onClick={this.graphicsHandler}
          >
            {this.props.middleButtonTitle}
          </button>
          <Dot />
          <button
            className={this.state.right ? "menu-button active" : "menu-button"}
            onClick={this.uiHandler}
          >
            {this.props.rightButtonTitle}
          </button>
          <Line />
        </div>
      </div>
    );
  }
}
