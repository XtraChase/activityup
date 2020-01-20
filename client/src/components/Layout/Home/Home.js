import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import TitleImage from "../../../images/ActivityUP-Logo(with-people).png";
import ActivityImage from "../../../images/hiker.jpg";

function Body() {
  return (
    <div>
      <Header />>
      <div className="bodyContainer">
        <div className="titleImageContainer">
          <img className="titleImage" src={TitleImage} alt="Title image logo" />
        </div>

        <div className="activityTypesRow">
          <div className="activityTypesColumn">
            <img
              className="activityTypesImage"
              src={ActivityImage}
              alt="activity type"
              width="100%"
            />
          </div>
          <div className="activityTypesColumn">
            <img
              className="activityTypesImage"
              src={ActivityImage}
              alt="activity type"
              width="100%"
            />
          </div>
          <div className="activityTypesColumn">
            <img
              className="activityTypesImage"
              src={ActivityImage}
              alt="activity type"
              width="100%"
            />
          </div>
          <div className="activityTypesColumn">
            <img
              className="activityTypesImage"
              src={ActivityImage}
              alt="activity type"
              width="100%"
            />
          </div>
          <div className="activityTypesColumn">
            <img
              className="activityTypesImage"
              src={ActivityImage}
              alt="activity type"
              width="100%"
            />
          </div>
          <div className="activityTypesColumn">
            <img
              className="activityTypesImage"
              src={ActivityImage}
              alt="activity type"
              width="100%"
            />
          </div>
          <div className="activityTypesColumn">
            <img
              className="activityTypesImage"
              src={ActivityImage}
              alt="activity type"
              width="100%"
            />
          </div>
          <div className="activityTypesColumn">
            <img
              className="activityTypesImage"
              src={ActivityImage}
              alt="activity type"
              width="100%"
            />
          </div>
          <div className="activityTypesColumn">
            <img
              className="activityTypesImage"
              src={ActivityImage}
              alt="activity type"
              width="100%"
            />
          </div>
          <div className="activityTypesColumn">
            <img
              className="activityTypesImage"
              src={ActivityImage}
              alt="activity type"
              width="100%"
            />
          </div>
        </div>

        <div className="trending">
          <div className="trendingRow">
            <div className="trendingColumn">
              <img
                className="activityTypesImage"
                src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
                alt="activity type"
                width="100%"
              />
            </div>
            <div className="trendingColumn">
              <img
                className="activityTypesImage"
                src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
                alt="activity type"
                width="100%"
              />
            </div>
          </div>
        </div>

        <div className="advertised">
          <div className="advertisedRow">
            <div className="advertisedColumn">
              <img
                className="activityTypesImage"
                src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
                alt="activity type"
                width="100%"
              />
            </div>
            <div className="advertisedColumn">
              <img
                className="activityTypesImage"
                src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
                alt="activity type"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Body;
