import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="logoContainer">
        <img className="logo" src="images/ActivityUP-Logo.png" alt="ActivityUP Logo"></img>
      </Link>
      <div className="navBtnContainer">
        <Link to="/Dashboard" className="newGroupBtn">
          Create A New Group
        </Link>
        <Link to="/Login" className="loginBtn">
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
