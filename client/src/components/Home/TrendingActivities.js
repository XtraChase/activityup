import React from "react";
import UpVote from "./UpVote";

function TrendingActivities() {
  return (
    <div>
      <div className="trending">
        <div className="trendingRow">
          <div className="trendingColumn upVoteableImage">
            <img
              className="GroupImage"
              src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
              alt="activity type"
              width="100%"
            />
            <UpVote activity="3" />
          </div>
          <div className="trendingColumn upVoteableImage">
            <img
              className="GroupImage"
              src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
              alt="activity type"
              width="100%"
            />
            <UpVote activity="4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingActivities;
