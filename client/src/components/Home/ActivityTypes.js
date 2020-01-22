import React from "react";
import images from "../../utils/activityTypes.json"

function ActivityTypes() {
  return (
      <div className="activityTypesRow">
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={images.sports}
            alt="sports"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={images.drinks}
            alt="drinks"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={images.food}
            alt="food"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={images.outdoors}
            alt="outdoors"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={images.movies}
            alt="movies"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={images.professional}
            alt="professional"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={images.shopping}
            alt="shopping"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={images.music}
            alt="music"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={images.gaming}
            alt="gaming"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={images.sites}
            alt="sites"
            width="100%"
          />
        </div>
      </div>
  );
}

export default ActivityTypes;
