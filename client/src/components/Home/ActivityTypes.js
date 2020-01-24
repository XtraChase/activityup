import React from "react";
import images from "../../utils/activityTypes.json";

function ActivityTypes() {
  let activityImgs = [];
  for (const key in images) {
    activityImgs.push(
      <div className="activityTypesColumn" key={key + Date.now()}>
        <div className="activityTypeContainer">
          <img
            src={images[key]}
            alt={key}
            width="100%"
            className="activityTypesImage"
            rel="preload"
          />
          <p className="activityTypesText">{key.toUpperCase()}</p>
        </div>
      </div>
    );
  }

  return <div className="activityTypesRow">{activityImgs}</div>;
}

export default ActivityTypes;
