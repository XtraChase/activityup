import React, { Component } from "react";
import Activities from "../../utils/activities.json";
import UpVote from "./UpVote";

class AdvertisedActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Activities,
      activity: "",
      upvotes: 4
    };
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote(e) {
    console.log(e.target);

    this.setState({ upvotes: this.state.Activities[0].upvotes + 1 });
    // console.log("Activity Upvoted!", this.state.Activities[0].upvotes);
  }

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
                // id={activity.id}
                // key={activity.id}
                activity={activity}
                upvotes={activity.upvotes}
                handleArrowClick={this.handleUpVote}
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
