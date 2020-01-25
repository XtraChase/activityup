import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import API from "../../utils/API";
import "./styles.css";

class Login extends Component {
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
      .then(user => console.log("(login.index.js)" + user.data))
      .catch(err => console.log(err));
    this.setState({
      username: "",
      password: ""
    });
  }

  render() {
    return (
      <>
        <Link to="/">
          <img
            className="logo"
            src="images/ActivityUP-Logo.png"
            alt="ActivityUP Logo"
          />
        </Link>
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
            <input type="submit" value="Login" />
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

export default Login;
