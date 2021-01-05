import React, { Component, Fragment } from "react";
import "./ProjectContainer.css";
import Graphics from "./Graphics/Graphics.js";
import Coding from "./Coding/Coding.js";
import Ui from "./Ui/Ui.js";
<<<<<<< HEAD
import Modal from "../Ui/Modal/Modal.js";
import Data from "../../Data/Data.js";
import Item from "./Coding/Item/Item.js";
import ExpandedItem from "./Coding/Item/ExpandedItem/ExpandedItem.js";
=======
import Dot from "./UI elements/Dot/Dot.js";
import Line from "./UI elements/Line/BreakLine.js";
>>>>>>> 910ba281090f131da22b0256ce1d084ad71e24b9

class ProjectContainer extends Component {
  state = {
    graphics: false,
    coding: true,
    ui: false,
    modal: false,
    backDrop: false,
    modalImageId: null,
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

  modalHandler = () => {
    console.log("modal ON");
    this.setState({modal: true});
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
<<<<<<< HEAD
            {this.state.modal ? (
              <Modal>
                <div>
                  <h1>Hello</h1>
                </div>
              </Modal>
            ) : null}
            {/* <div className="project-break"></div> */}
=======
>>>>>>> 910ba281090f131da22b0256ce1d084ad71e24b9
            {this.state.graphics ? (
              <Graphics clicked={this.modalHandler} />
            ) : null}
            {this.state.coding ? <Coding /> : null}
            {this.state.ui ? <Ui /> : null}
<<<<<<< HEAD

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
=======
>>>>>>> 910ba281090f131da22b0256ce1d084ad71e24b9
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContainer;
