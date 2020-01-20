import React from "react";
import { Link } from "react-router-dom";
import ActivityImage from "../../../images/hiker.jpg";

function Body() {
  return (
    <div className="bodyContainer">
      <ul>
        <li className="activityType">
          <Link to="/group">
            <img
              className="activityTypeImage"
              src={ActivityImage}
              alt="activity type"
            />
            Atlanta Hiking Group
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Body;
