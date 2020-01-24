import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <img
          className="logo"
          src="images/ActivityUP-Logo.png"
          alt="ActivityUP Logo"
        />

        <Link to="/dashboard" className="newGroupBtn">
          Create A New Group
        </Link>
        <Link to="/login" className="loginBtn">
          Login
        </Link>
      </header>
    </>
  );
}

export default Header;
