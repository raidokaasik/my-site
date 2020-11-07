import React, {Component} from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import About from "../Pages/About.js";
import Contact from "../Pages/Contact.js";
import Homepage from "../Components/Homepage/Homepage.js";
import Navbar from "../Components/Navbar/Navbar.js";
import Footer from "../Components/Footer/Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div classname="App">
          <Navbar />

          {/* //Routes */}
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
