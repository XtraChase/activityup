import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/ActivityUP-Logo.png";

function Header() {
  return (
    <header>
      <Link to="/" className="logoContainer">
        <img className="logo" src={Logo} alt="ActivityUP Logo"></img>
      </Link>
      <h1 className="dashboardTitle">(name)Group</h1>
      <Link to="/" className="loginBtnContainer">
        <button className="loginBtn">Logout</button>
      </Link>
    </header>
  );
}

export default Header;
