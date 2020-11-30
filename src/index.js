import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App.js";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
