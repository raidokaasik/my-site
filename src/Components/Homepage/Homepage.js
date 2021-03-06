import React, {Component, Fragment} from "react";
import FrontPage from "../Frontpage/FrontPage.js";
import ProjectContainer from "../Projects/ProjectContainer.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <FrontPage />
        <ProjectContainer />
        <About />
        <Contact />
      </Fragment>
    );
  }
}

export default Homepage;
