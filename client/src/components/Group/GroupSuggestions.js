import React, { Component } from "react";
import eventExample from "../../utils/eventExample.json";
import UpVote from "../Home/UpVote";

class GroupSuggestions extends Component {
  state = {
    eventExample,
    event: "",
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
          {this.state.eventExample.map((e, i) => (
            <div className="imageColumn">
              <img
                className="image"
                width="100%"
                key={e.event[i].id}
                src={e.event[i].activities[i].image}
                alt={e.event[i].date}
              />
              <UpVote
                activity={e.event[i].id}
                handleArrowClick={() => this.handleUpVote(e.event[i].id)}
              />
              <div className="text-block">
                <h4>{e.event[i].activities[i].activity}</h4>
                <p>{e.event[i].activities[i].subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default GroupSuggestions;
