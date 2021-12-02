import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Home from "./components/Home";
import Search from "./components/Search";
import Profile from "./components/Profile";

//Import
import { HashRouter as Router, Route } from "react-router-dom";
const routes = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/details/:username" component={Profile} />
  </Router>
);
ReactDOM.render(routes, document.getElementById("root"));
