import React from "react";
import Drinks from "../../images/Drinks.jpg";
import Sports from "../../images/sports.jpg";
import Food from "../../images/food.jpg";
import Outdoors from "../../images/hiker.jpg";
import Movies from "../../images/movies.jpg";
import Professional from "../../images/Professional.png"
import Shopping from "../../images/shopping.jpeg"
import Music from "../../images/music.jpg"
import Gaming from "../../images/gaming.jpeg";
import Sites from "../../images/sites.jpg";

function ActivityTypes() {
  return (
    <div>
      <div className="activityTypesRow">
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={Sports}
            alt="sports"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={Drinks}
            alt="drinks"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={Food}
            alt="food"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={Outdoors}
            alt="outdoors"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={Movies}
            alt="movies"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={Professional}
            alt="professional"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={Shopping}
            alt="shopping"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={Music}
            alt="music"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={Gaming}
            alt="gaming"
            width="100%"
          />
        </div>
        <div className="activityTypesColumn">
          <img
            className="activityTypesImage"
            src={Sites}
            alt="sites"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default ActivityTypes;
