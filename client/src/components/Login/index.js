import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
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
      .then(user => console.log("(login.index.js)" + user.data))
      .catch(err => console.log(err));
    this.setState({
      username: "",
      password: ""
    });
    this.redirect();
    console.log("Authenticated: " + this.props.authenticated);
  }

  redirect() {
    // API.getUser().then(response => {
    //   if (response.data.user) {
    //     console.log("(App.js)Logged in as: " + response.data.user.username);
    //     this.setState({
    //       authenticated: true,
    //       username: response.data.user.username
    //     });
    //   } else {
    //     console.log("App.js: no user");
    //     this.setState({ authenticated: false, username: null });
    //   }
    // });

    // if (this.state.authenticated) {
    return <Redirect to="/dashboard" />;
    // } else {
    //   alert("Please enter a valid username and password");
    // }
  }

  render() {
    return (
      <>
        {/* <Header authenticated={this.props.authenticated}/> */}
        <Link to="/" className="logoContainer">
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
