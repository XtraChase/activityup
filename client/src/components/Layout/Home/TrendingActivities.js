import React from "react";
import { Link } from "react-router-dom";

function TrendingActivities() {
  return (
    <div>
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
    </div>
  );
}

export default TrendingActivities;
