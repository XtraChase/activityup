import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CreateGroup } from "./CreateGroup";
import API from "../../utils/API";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false,
      username: null
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    API.getUser().then(response => {
      if (response.data.user) {
        console.log("(App.js)Logged in as: " + response.data.user.username);
        this.setState({
          authenticated: true,
          username: response.data.user.username
        });
      } else {
        console.log("App.js: no user");
        this.setState({ authenticated: false, username: null });
      }
    });
  }

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });

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
          <div
            className="newGroupBtn"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Create A New Group
          </div>

          <div className="welcomeUser">Welcome {this.state.username}</div>
          <Link to="/" className="loginBtn">
            Logout
          </Link>
        </header>
        <CreateGroup
          show={this.state.addModalShow}
          onHide={addModalClose}
          style={{ background: "none" }}
        />
      </>
    );
  }
}

export default Header;
