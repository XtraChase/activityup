import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Header from "../Layout/Group/Header";
import Body from "../Layout/Group/Body";
import Footer from "../Layout/Group/Footer";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
