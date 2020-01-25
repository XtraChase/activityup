import React, { Component } from "react";
import UpVote from "./UpVote";

class AdvertisedActivities extends Component {
  state = {
    activity: "",
    count: 0
  };

  handleArrowClick = activity => {};

  render() {
    return (
      <>
        <div className="advertised advertisedRow">
          <div className="advertisedColumn upVoteableImage">
            <img
              className="GroupImage"
              src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
              alt="activity type"
              width="100%"
            />
            <UpVote activity="1" handleArrowClick={() => console.log("upvote!")} />
          </div>
          <div className="advertisedColumn upVoteableImage">
            <img
              className="GroupImage"
              src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
              alt="activity type"
              width="100%"
            />
            <UpVote activity="2" handleArrowClick={() => console.log("upvote!")} />
          </div>
        </div>
      </>
    );
  }
}

export default AdvertisedActivities;
