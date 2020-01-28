import React, { Component } from "react";
import Activities from "../../utils/activities.json";
import UpVote from "./UpVote";

class AdvertisedActivities extends Component {
  state = {
    Activities,
    activity: "",
    upvotes: 0
  };

  handleUpVote = activity => {
    console.log("Activity Upvoted!");
    // let update = {
    //   upvotes: this.state.upvotes
    // };
  };

  render() {
    return (
      <>
        <div className="imageRow">
          {this.state.Activities.map(activity => (
            <div className="imageColumn">
              <img
                className="image"
                width="100%"
                key={activity.id}
                src={activity.image}
                alt={activity.activity}
              />
              <UpVote
                activity={activity.id}
                handleArrowClick={() => this.handleUpVote(activity.id)}
              />
              <div className="text-block">
                <h4>{activity.activity}</h4>
                <p>{activity.subtitle}</p>
                <p>{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default AdvertisedActivities;
