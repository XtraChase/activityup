import React from "react";
import { Link } from "react-router-dom";
import CreateGroup from "./CreateGroup.js"

export default function Header() {
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
        <div className="welcomeUser">Welcome (username)</div>
        <Link to="/" className="loginBtn">
          Logout
        </Link>
        <CreateGroup />
      </header>
    </>
  );
}
