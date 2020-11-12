import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
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
          <Route exact path="/" component={Homepage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
