import React from "react";
import { Link } from "react-router-dom";
import TitleImage from "../../../images/ActivityUP-Logo(with-people).png";

function Title() {
  return (
    <div>
      <div className="titleImageContainer">
        <img className="titleImage" src={TitleImage} alt="Title image logo" />
      </div>
    </div>
  );
}

export default Title;
