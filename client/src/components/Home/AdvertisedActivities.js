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
        <div className="imageRow">
          <div className="imageColumn">
            <img
              className="image"
              src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
              alt="activity type"
              width="100%"
            />
            <UpVote
              activity="3"
              handleArrowClick={() => console.log("upvote!")}
            />
          </div>
          <div className="imageColumn">
            <img
              className="image"
              src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
              alt="activity type"
              width="100%"
            />
            <UpVote
              activity="4"
              handleArrowClick={() => console.log("upvote!")}
            />
          </div>
        </div>
      </>
    );
  }
}

export default AdvertisedActivities;
