import React from "react";
import { Link } from "react-router-dom";
import TitleImage from "../../../images/ActivityUP-Logo(with-people).png";

function Body() {
  return (
    <div className="homeBodyContent">
      <div className="titleImageContainer">
        <img className="titleImage" src={TitleImage} alt="" />
      </div>
    </div>
  );
}

export default Body;
