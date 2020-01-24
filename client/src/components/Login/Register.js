import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Home/Header";
import API from "../../utils/API";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.update = this.update.bind(this);
    this.register = this.register.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
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
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
  }

  render() {
    return (
      <>
        <div className="register">
          <form onSubmit={this.register}>
            <h2>Create an account</h2>
            <div className="name">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={this.state.fullName}
                onChange={this.update}
              />
            </div>
            <div className="username">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.update}
              />
            </div>
            <div className="email">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.email}
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

            <input className="blue" type="submit" value="Submit" />
          </form>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </>
    );
  }
}

export default Register;
