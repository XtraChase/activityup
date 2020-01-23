import React from "react";
import Drinks from "../../images/Drinks.jpg";
import Sports from "../../images/sports.jpg";
import Food from "../../images/food.jpg";
import Outdoors from "../../images/hiker.jpg";
import Movies from "../../images/movies.jpg";
import Professional from "../../images/Professional.png";
import Shopping from "../../images/shopping.jpg";
import Music from "../../images/music.jpg";
import Gaming from "../../images/gaming.jpg";
import Sites from "../../images/sites.jpg";

function ActivityTypes() {
  return (
    <div>
      <div className="activityTypesRow">
        <div className="activityTypesColumn">
          <div className="activityTypeContainer">
            <img
              rel="preload"
              className="activityTypesImage"
              src={Sports}
              alt="Sports"
              width="100%"
            />
            <p class="activityTypesText">SPORTS</p>
          </div>
        </div>
        <div className="activityTypesColumn">
          <div className="activityTypeContainer">
            <img
              rel="preload"
              className="activityTypesImage"
              src={Drinks}
              alt="Drinks"
              width="100%"
            />
            <p class="activityTypesText">DRINKS</p>
          </div>
        </div>
        <div className="activityTypesColumn">
          <div className="activityTypeContainer">
            <img
              rel="preload"
              className="activityTypesImage"
              src={Food}
              alt="Food"
              width="100%"
            />
            <p class="activityTypesText">FOOD</p>
          </div>
        </div>
        <div className="activityTypesColumn">
          <div className="activityTypeContainer">
            <img
              rel="preload"
              className="activityTypesImage"
              src={Outdoors}
              alt="Outdoors"
              width="100%"
            />
            <p class="activityTypesText">OUTDOORS</p>
          </div>
        </div>
        <div className="activityTypesColumn">
          <div className="activityTypeContainer">
            <img
              rel="preload"
              className="activityTypesImage"
              src={Movies}
              alt="Movies"
              width="100%"
            />
            <p class="activityTypesText">MOVIES</p>
          </div>
        </div>
        <div className="activityTypesColumn">
          <div className="activityTypeContainer">
            <img
              rel="preload"
              className="activityTypesImage"
              src={Professional}
              alt="Professional"
              width="100%"
            />
            <p class="activityTypesText">PROFESSIONAL</p>
          </div>
        </div>
        <div className="activityTypesColumn">
          <div className="activityTypeContainer">
            <img
              rel="preload"
              className="activityTypesImage"
              src={Shopping}
              alt="Shopping"
              width="100%"
            />
            <p class="activityTypesText">SHOPPING</p>
          </div>
        </div>
        <div className="activityTypesColumn">
          <div className="activityTypeContainer">
            <img
              rel="preload"
              className="activityTypesImage"
              src={Music}
              alt="Music"
              width="100%"
            />
            <p class="activityTypesText">MUSIC</p>
          </div>
        </div>
        <div className="activityTypesColumn">
          <div className="activityTypeContainer">
            <img
              rel="preload"
              className="activityTypesImage"
              src={Gaming}
              alt="Gaming"
              width="100%"
            />
            <p class="activityTypesText">GAMING</p>
          </div>
        </div>
        <div className="activityTypesColumn">
          <div className="activityTypeContainer">
            <img
              rel="preload"
              className="activityTypesImage"
              src={Sites}
              alt="Sites"
              width="100%"
            />
            <p class="activityTypesText">SITES</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityTypes;
