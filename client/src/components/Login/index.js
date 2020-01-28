import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import Header from "../Header";
import API from "../../utils/API";
import "./styles.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.login = this.login.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  login(e) {
    e.preventDefault();
    API.logIn(this.state)
      .then(response => console.log("(login/index.js)", response.data))
      .then(this.props.updateUser)
      .catch(err => console.log(err));
    this.setState({
      username: this.state.username,
      password: ""
    });
    console.log("Username: " + this.state.username);
    console.log("Authenticated: " + this.props.authenticated);
  }

  render() {
    let loginButton;
    if (this.props.authenticated) {
      loginButton = <Redirect to="/dashboard"></Redirect>;
    } else {
      loginButton = <input type="submit" value="Login" />;
    }

    return (
      <>
        <Header
          authenticated={this.props.authenticated}
          username={this.props.username}
          updateUser={this.props.updateUser}
        />
        <div className="col border-right leftColumn login">
          <form onSubmit={this.login}>
            <h2>Login</h2>
            <div className="username">
              <input
                type="text"
                placeholder="Username..."
                value={this.state.username}
                onChange={this.update}
                name="username"
              />
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="Password..."
                value={this.state.password}
                onChange={this.update}
                name="password"
              />
            </div>
            <div>{loginButton}</div>
          </form>
        </div>
        <div className="col rightColumn oAuthlogin">
          <form>
            <FacebookLoginButton onClick={() => alert("Hello")} />
            <GoogleLoginButton onClick={() => alert("Hello")} />
          </form>
        </div>
        <div className="row bottomButtons bottom-container">
          <div className="col signUp">
            <Link to="/register">
              <button className="btn signUpBtn">Sign up</button>
            </Link>
          </div>
          <div className="col forgotPassword">
            <button className="btn forgotPasswordBtn">Forgot password?</button>
          </div>
        </div>
      </>
    );
  }
}
