import React, {Component, Fragment} from "react";
import "./ProjectContainer.css";
import Data from "../../Data/Data.js";
import Item from "../Projects/Coding/Item/Item.js";
import ExpandedItem from "../Projects/Coding/Item/ExpandedItem/ExpandedItem.js";

class ProjectContainer extends Component {
  state = {
    expandedItemId: null,
    expanded: false,
  };

  itemHandler = () => {
    this.setState({expanded: true});
    console.log("test");
    console.log(process.env.REACT_APP_GIT_KEY);
  };
  expandedItemHandler = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Fragment>
        <div className="project-header">
          <h1 id="project-heading-lg">PROJECTS</h1>
        </div>
        <div id="projects">
          <div className="project-container">
            {/* <div className="project-break"></div> */}
            <div className="project-menu-buttons">
              <button>Programming</button>
              <p>/</p>
              <button>3D</button>
              <p>/</p>
              <button>UI</button>
            </div>
            {this.state.expanded ? (
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
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProjectContainer;
