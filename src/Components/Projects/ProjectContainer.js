import React, {Component, Fragment} from "react";
import "./ProjectContainer.css";
import Graphics from "./Graphics/Graphics.js";
import Coding from "./Coding/Coding.js";
import Ui from "./Ui/Ui.js";
import Modal from "../Ui/Modal/Modal.js";
import Data from "../../Data/Data.js";
import Item from "./Coding/Item/Item.js";
import ExpandedItem from "./Coding/Item/ExpandedItem/ExpandedItem.js";

class ProjectContainer extends Component {
  state = {
    // expandedItemId: null,
    // expanded: false,
    graphics: false,
    coding: true,
    ui: false,
    modal: false,
    backDrop: false,
    modalImageId: null,
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

  modalHandler = () => {
    console.log("modal ON");
    this.setState({modal: true});
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
            {this.state.modal ? (
              <Modal>
                <div>
                  <h1>Hello</h1>
                </div>
              </Modal>
            ) : null}
            {/* <div className="project-break"></div> */}
            {this.state.graphics ? (
              <Graphics clicked={this.modalHandler} />
            ) : null}
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
