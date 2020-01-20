import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../images/ActivityUP-Logo.png";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import "./styles.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log("You are logged in");
    console.log(this.state);
    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div>
        <Link to="/" className="logoContainer">
          <img className="logo" src={Logo} alt="ActivityUP Logo"></img>
        </Link>
        <div className="col border-right leftColumn">
          <div className="login">
            <form onSubmit={this.displayLogin}>
              <h2>Login</h2>
              <div className="username">
                <input
                  type="text"
                  placeholder="Username..."
                  value={this.state.email}
                  onChange={this.update}
                  name="email"
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
        </div>
        <div className="col rightColumn">
          <div className="oAuthlogin">
            <form>
              <Link>
                <FacebookLoginButton onClick={() => alert("Hello")} />
                <GoogleLoginButton onClick={() => alert("Hello")} />
              </Link>
            </form>
          </div>
        </div>
        <div className="bottom-container">
          <div className="row bottomButtons">
            <div className="col signUp">
              <button className="btn signUpBtn">Sign up</button>
            </div>
            <div className="col forgotPassword">
              <button className="btn forgotPasswordBtn">
                Forgot password?
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
