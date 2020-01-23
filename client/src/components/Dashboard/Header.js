import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CreateGroup } from "./CreateGroup";
// import Logo from "../../images/ActivityUP-Logo.png";
// import LogoSVG from "../../../images/activityup.svg";

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
            <img className="logo" src="images/ActivityUP-Logo.png" alt="ActivityUP Logo"></img>
          </Link>
          <div className="navBtnContainer">
            <Link
              className="newGroupBtn"
              onClick={() => this.setState({ addModalShow: true })}
            >
              Create A New Group
            </Link>
            <Link to="/" className="loginBtn">
              Logout
            </Link>{" "}
          </div>
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
