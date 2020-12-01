import React, {Component, Fragment} from "react";
import FrontPage from "../Frontpage/FrontPage.js";
import ProjectContainer from "../Projects/ProjectContainer.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <FrontPage />
        <ProjectContainer />
        <About />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default Homepage;
