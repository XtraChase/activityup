import React, { Component } from "react";
import Activities from "./Activities";
import SuggestActivity from "./SuggestActivity";

// TODO When suggest button is clicked a modal similiar to create group modal pops up for entering an activity info
// TODO When submitted the activity is added to the event section associated with the specified date
// TODO Leave event button removes the event from the calender for the associated user
export default class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalShow: false
    };
  }

  addModalClose() {
    this.setState({ addModalShow: false });
  }

  render() {
    return (
      <div className="eventDetailsPage">
        <div className="eventDetailsHeader">
          <button
            className="suggest"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Suggest
          </button>
          <SuggestActivity
            show={this.state.addModalShow}
            onHide={() => this.addModalClose()}
            style={{ background: "none" }}
          />
          <div className="eventDate">Febuary 11, 2020</div>
          <button className="leaveEvent">Leave Event</button>
        </div>
        <div className="eventSuggestions">
          <Activities />
        </div>
      </div>
    );
  }
}
