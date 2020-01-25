import React from "react";
import UpVote from "./UpVote";

function TrendingActivities() {
  return (
    <div className="imageRow">
      <div className="imageColumn">
        <img
          className="GroupImage"
          src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
          alt="activity type"
          width="100%"
        />
        <UpVote activity="1" />
      </div>
      <div className="imageColumn">
        <img
          className="GroupImage"
          src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
          alt="activity type"
          width="100%"
        />
        <UpVote activity="2" />
      </div>
    </div>
  );
}

export default TrendingActivities;
