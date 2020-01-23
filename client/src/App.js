import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Login/Register";
import Dashboard from "./components/Dashboard";
import Group from "./components/Group";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} key={"root" + Date.now()} />
          <Route path="/login" component={Login} key={"login" + Date.now()} />
          <Route
            path="/register"
            component={Register}
            key={"register" + Date.now()}
          />
          <Route
            path="/dashboard"
            component={Dashboard}
            key={"dashboard" + Date.now()}
          />
          <Route path="/group" component={Group} key={"group" + Date.now()} />
        </div>
      </Router>
    );
  }
}

export default App;
