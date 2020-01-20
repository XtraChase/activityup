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
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import Group from "./components/Pages/Group";
import "./App.css";
import Register from "./components/Pages/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/group" component={Group} />
        </div>
      </Router>
    );
  }
}

export default App;
