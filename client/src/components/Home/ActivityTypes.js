import React, { Component } from "react";
import images from "../../utils/activityTypes.json";

export class ActivityTypes extends Component {
  render() {
    let activityImgs = [];

    for (const key in images) {
      activityImgs.push(
        <div className="activityTypesColumn" key={key + Date.now()}>
          <img
            src={images[key]}
            alt={key}
            width="100%"
            className="activityTypesImage"
          />
          <p className="activityTypesText">{key.toUpperCase()}</p>
        </div>
      );
    }

    return (
      <>
        <div className="activityTypesRow">{activityImgs}</div>
      </>
    );
  }
}

export default ActivityTypes;
