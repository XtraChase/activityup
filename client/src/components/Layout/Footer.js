import React from "react";
import Logo from "../../images/ActivityUP-Logo.png";
import GithubLogo from "../../images/GitHub-Mark-Light-64px.png";

function Footer() {
  return (
    <footer>
      <p id="copyright">Copyright &copy; {new Date().getFullYear()}</p>

      <div class="github-icon">
        <a href="https://github.com/XtraChase/activityup" target="_blank">
          <img id="github-icon" src={GithubLogo} alt="github" />
        </a>
      </div>
    </footer>
  );
}

const logoStyle = {
  left: "0",
  width: "180px",
  height: "auto",
  marginLeft: "20px"
};

export default Footer;
