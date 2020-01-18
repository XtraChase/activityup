import React from "react";
import { Link } from "react-router-dom";
import TitleImage from "../../../images/ActivityUP-Logo(with-people).png";
import ActivityImage from "../../../images/hiker.jpg";

function Body() {
  return (
    <div className="homeBodyContainer">
      <div className="titleImageContainer">
        <img className="titleImage" src={TitleImage} alt="" />
      </div>

      <div className="activityTypes container">
        <div className=" row">
          <ul col-12>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
            <li className="activityType">
              <img
                className="activityTypeImage"
                src={ActivityImage}
                alt="activity type"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="trending"></div>
    </div>
  );
}

export default Body;
