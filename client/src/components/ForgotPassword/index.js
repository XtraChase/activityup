import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
// import Header from "../Header";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    let username = e.target.username;
    let value = e.target.value;
    this.setState({
      [username]: value
    });
  }

  register(e) {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("passwords do not match");
    } else {
      API.register(this.state)
        .then(user => console.log(user))
        .catch(err => console.log(err));
      this.setState({
        username: "",
        password: "",
        confirmPassword: ""
      });
    }
  }

  render() {
    return (
      <>
        <Link to="/" className="logoContainer">
          <img
            className="logo"
            src="images/ActivityUP-Logo.png"
            alt="ActivityUP Logo"
          />
        </Link>
        <br />
        {/* <Header authenticated={this.props.authenticated}/> */}
        <div className="register">
          <form onSubmit={this.register}>
            <h2>Resetting Password</h2>
            <div className="username">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.update}
              />
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.update}
              />
            </div>
            <div className="confirmPassword">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.update}
              />
            </div>

            <input type="submit" value="Submit" />
          </form>
          <div className="accountQuestionContainer">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </>
    );
  }
}

//PLEASE CONFIRM THE ROUTING IS GOOD - SENDING DATA TO THE DB ---- THANKS

export default ForgotPassword;
