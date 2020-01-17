import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <Router>
        <h1>This is the login page</h1>
        <Link exact to="/Dashboard" className="loginBtnContainer">
          <button className="loginBtn">Login</button>
        </Link>
      </Router>
    );
  }
}

export default Login;
