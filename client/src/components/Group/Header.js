import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CreateEvent } from "./CreateEvent";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { addModalShow: false };
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
            Create A New Event
          </div>
          <div className="welcomeUser">Welcome (username)</div>
          <Link to="/" className="loginBtn">
            Logout
          </Link>
        </header>
        <CreateEvent
          show={this.state.addModalShow}
          onHide={addModalClose}
          style={{ background: "none" }}
        />
      </>
    );
  }
}

export default Header;
