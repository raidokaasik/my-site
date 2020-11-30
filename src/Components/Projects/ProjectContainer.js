import React, {Component, Fragment} from "react";
import "./ProjectContainer.css";
import Graphics from "./Graphics/Graphics.js";
import Coding from "./Coding/Coding.js";
import Ui from "./Ui/Ui.js";
import Data from "../../Data/Data.js";
import Item from "../Projects/Coding/Item/Item.js";
import ExpandedItem from "../Projects/Coding/Item/ExpandedItem/ExpandedItem.js";

class ProjectContainer extends Component {
  state = {
    // expandedItemId: null,
    // expanded: false,
    graphics: false,
    coding: true,
    ui: false,
  };

  // itemHandler = () => {
  //   this.setState({expanded: true});
  //   console.log("test");
  // };
  // expandedItemHandler = () => {
  //   this.setState({expanded: false});
  // };

  graphicsHandler = () => {
    this.setState({graphics: true, coding: false, ui: false});
  };
  codingHandler = () => {
    this.setState({graphics: false, coding: true, ui: false});
  };
  uiHandler = () => {
    this.setState({graphics: false, coding: false, ui: true});
  };

  render() {
    return (
      <div id="projects">
        <div className="project-header">
          <h1 id="project-heading-lg">PROJECTS</h1>
        </div>
        <div id="project-main">
          <div className="project-container">
            <div className="project-menu-buttons">
              <button
                className={
                  this.state.coding ? "menu-button active" : "menu-button"
                }
                onClick={this.codingHandler}
              >
                Programming
              </button>
              <button
                className={
                  this.state.graphics ? "menu-button active" : "menu-button"
                }
                onClick={this.graphicsHandler}
              >
                3D
              </button>
              <button
                className={this.state.ui ? "menu-button active" : "menu-button"}
                onClick={this.uiHandler}
              >
                UI
              </button>
            </div>
            {/* <div className="project-break"></div> */}
            {this.state.graphics ? <Graphics /> : null}
            {this.state.coding ? <Coding /> : null}
            {this.state.ui ? <Ui /> : null}
            {/* {this.state.expanded ? (
              <div className="expanded-content">
                <ExpandedItem clicked={this.expandedItemHandler} />
              </div>
            ) : (
              <div className="project-content">
                <div className="project-content-info">
                  <h3>Project description</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    id corrupti ipsam, voluptates sed aut mollitia magni nulla
                    repudiandae sapiente ex aliquam quibusdam similique vero
                    recusandae consequatur minus iusto corporis!
                  </p>
                </div>
                <div className="project-content-items">
                  <Item clicked={this.itemHandler} />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                  <Item />
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
