import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/ActivityUP-Logo.png";

function Header() {
  return (
    <header>
      <Link to="/" className="logoContainer">
        <img className="logo" src={Logo} alt="ActivityUP Logo"></img>
      </Link>
      <Link to="/Login" className="loginBtnContainer">
        <button className="loginBtn">Login</button>
      </Link>
    </header>
  );
}

export default Header;
