import React, { Component } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./styles.css";
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
      <div>
        <Link> 
          <FacebookLoginButton onClick={() => alert("Hello")} />
          <GoogleLoginButton onClick={() => alert("Hello")} />
        </Link>
      </div>
    );
  }
}

export default Login;
