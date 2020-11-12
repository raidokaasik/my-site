import React, {Component, Fragment} from "react";
import FrontImage from "../Frontimage/Frontimage.js";
import ProjectContainer from "../Projects/ProjectContainer.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <FrontImage />
        <ProjectContainer />
        <About />
        <Contact />
      </Fragment>
    );
  }
}

export default Homepage;
