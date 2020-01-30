import React, { Component } from "react";
import Activities from "../../utils/activities.json";
import { ReactSVG } from "react-svg";

class AdvertisedActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Activities,
      activity: "",
      upvotes: null
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
              <ReactSVG
                className="arrow"
                src="images/Arrow.svg"
                onClick={() => {
                  return activity.upvotes + 1;
                }}
              />
              <p className="upVoteCount">{activity.upvotes}</p>;
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
