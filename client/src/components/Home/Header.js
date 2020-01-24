import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
        <Link to="/dashboard" className="newGroupBtn">
          Create A New Event
        </Link>
        {/* <div className="welcomeUser">Welcome (username)</div> */}
        <Link to="/" className="loginBtn">
          Logout
        </Link>
      </header>
    </>
  );
}

export default Header;
