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
        <Link to="#" className="newGroupBtn">
          Create A New Group
        </Link>
        <Link to="/" className="loginBtn">
          Logout
        </Link>
      </div>
    </header>
  );
}

export default Header;
