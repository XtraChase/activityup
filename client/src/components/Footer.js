import React from "react";
import GithubLogo from "../images/GitHub-Mark-Light-64px.png";

function Footer() {
  return (
    <footer>
      <p id="copyright">
        Copyright ActivityUP &copy; {new Date().getFullYear()}
      </p>

      <div className="github-icon">
        <a
          href="https://github.com/XtraChase/activityup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="github-icon" src={GithubLogo} alt="github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
