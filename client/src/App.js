import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  withRouter,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Home from "./components/Layout/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Layout/Dashboard/Dashboard";
import Group from "./components/Layout/Group/Group";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/group" component={Group} />
        </div>
      </Router>
    );
  }
}

export default App;
