import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <h1>Welcome to your dashboard!</h1>
      </Router>
    );
  }
}

export default Dashboard;
