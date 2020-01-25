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
<<<<<<< HEAD:client/src/components/Home/AdvertisedActivities.js
            <UpVote activity="1" handleArrowClick={() => console.log("upvote!")} />
=======
            <UpVote activity="3" />
>>>>>>> css and classname cleanup related to images:client/src/components/AdvertisedActivities.js
          </div>
          <div className="imageColumn">
            <img
              className="image"
              src="https://www.insidesport.co/wp-content/uploads/2020/01/nfl.jpg"
              alt="activity type"
              width="100%"
            />
<<<<<<< HEAD:client/src/components/Home/AdvertisedActivities.js
            <UpVote activity="2" handleArrowClick={() => console.log("upvote!")} />
=======
            <UpVote activity="4" />
>>>>>>> css and classname cleanup related to images:client/src/components/AdvertisedActivities.js
          </div>
        </div>
      </>
    );
  }
}

export default AdvertisedActivities;
