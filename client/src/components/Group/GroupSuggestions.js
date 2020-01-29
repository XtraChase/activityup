import React, { Component } from "react";
import eventExample from "../../utils/eventExample.json";
import UpVote from "../Home/UpVote";

class GroupSuggestions extends Component {
  state = {
    eventExample,
    event: 0,
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
          {this.state.eventExample[this.state.event].event[0].activities.map(
            activity => (
              <div className="imageColumn">
                <img
                  className="groupSuggestion"
                  width="100%"
                  key={activity.id}
                  src={activity.image}
                  alt={activity.date}
                />
                <UpVote
                  activity={activity.id}
                  handleArrowClick={() => this.handleUpVote(activity.id)}
                />
                <div className="groupSuggestionTextBlock">
                  <h4>{activity.activity}</h4>
                  <p>{activity.subtitle}</p>
                </div>
              </div>
            )
          )}
        </div>
      </>
    );
  }
}

export default GroupSuggestions;
