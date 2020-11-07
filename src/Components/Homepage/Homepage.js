import React, {Component, Fragment} from "react";
import FrontImage from "../Frontimage/Frontimage.js";
import ProjectContainer from "../Projects/ProjectContainer.js";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <FrontImage />
        <ProjectContainer />
      </Fragment>
    );
  }
}

export default Homepage;
