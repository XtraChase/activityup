import React from "react";
import Logo from "../../images/ActivityUP-Logo.png";

function Header() {
  return (
    <header>
      <div className="logoContainer">
        <img className="logo" src={Logo} alt="ActivityUP Logo"></img>
      </div>
      <div className="loginBtnContainer">
        <button className="loginBtn">Login</button>
      </div>
    </header>
  );
}

export default Header;
