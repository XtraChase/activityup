import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateGroup from "./CreateGroup.js";
import API from "../../utils/API";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false
      // username: null
    };

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    API.logOut()
      .then(response => console.log("Header/index.js Logout: ", response.data))
      .then(this.props.updateUser)
      .catch(err => console.log(err));
  }

  addModalClose() {
    this.setState({ addModalShow: false });
  }

  checkAuth() {
    if (this.props.authenticated) {
      return (
        <>
          <div
            className="newGroupBtn"
            onClick={() => this.setState({ addModalShow: true })}
            style={{ marginRight: "280px" }}
          >
            Create A New Group
          </div>

          <Link to="/dashboard" className="welcomeUser">
            Welcome {this.props.username}
          </Link>
          <Link to="/" onClick={this.logout} className="loginBtn">
            Logout
          </Link>
          <CreateGroup
            show={this.state.addModalShow}
            onHide={() => this.addModalClose()}
            style={{ background: "none" }}
          />
        </>
      );
    } else {
      return (
        <>
          <Link to="/login" className="newGroupBtn">
            Create A New Group
          </Link>
          <Link to="/login" className="loginBtn">
            Login
          </Link>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <header>
          <Link to="/" className="logoContainer">
            <img
              className="logo"
              src="images/ActivityUP-Logo.png"
              alt="ActivityUP Logo"
            />
          </Link>
          {this.checkAuth()}
        </header>
      </>
    );
  }
}
