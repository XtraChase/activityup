import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/ActivityUP-Logo.png";
// import LogoSVG from "../../../images/activityup.svg";

function Header() {
  return (
    <header>
      <Link to="/" className="logoContainer">
        <img className="logo" src={Logo} alt="ActivityUP Logo"></img>
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
