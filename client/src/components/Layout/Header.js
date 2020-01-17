import React from "react";
import Logo from "../../images/ActivityUP-Logo.png";

function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="ActivityUP Logo" style={logoStyle}></img>

        <button className="login-btn">Login</button>
      </div>
    </header>
  );
}

const logoStyle = {
  left: "0",
  width: "140px",
  height: "auto",
  marginLeft: "20px"
};

export default Header;
