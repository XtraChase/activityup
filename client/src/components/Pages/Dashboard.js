import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Header from "../Layout/Dashboard/Header";
import Body from "../Layout/Dashboard/Body";
import Footer from "../Layout/Dashboard/Footer";

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    );
  }
}

export default Dashboard;
