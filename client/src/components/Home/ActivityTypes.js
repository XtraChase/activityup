import React from "react";
import { Link } from "react-router-dom";
import images from "../../utils/activityTypes.json";

function ActivityTypes() {
  let activityImgs = [];
  for (const key in images) {
    activityImgs.push(
      <div className="activityTypesColumn" key={key + Date.now()}>
        <Link to="/activitytype" className="activityTypeContainer">
          <img
            src={images[key]}
            alt={key}
            width="100%"
            className="activityTypesImage"
          />
          <p className="activityTypesText">{key.toUpperCase()}</p>
        </Link>
      </div>
    );
  }

  return <div className="activityTypesRow">{activityImgs}</div>;
}

export default ActivityTypes;
