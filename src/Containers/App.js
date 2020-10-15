import React, {Component} from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import About from "../Pages/About.js";
import Contact from "../Pages/Contact.js";
import Works from "../Pages/Works.js";
import Navbar from "../Components/Navbar/Navbar.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div classname="App">
          <Navbar />

          {/* //Routes */}
          <Route path="/" component={Works} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
