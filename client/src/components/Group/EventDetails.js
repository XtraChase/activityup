import React, { Component } from "react";
import GroupSuggestions from "./GroupSuggestions";

class EventDetails extends Component {
  render() {
    return (
      <div className="eventDetailsPage">
        <div className="eventDetailsHeader">
          <button className="suggest">Suggest</button>
          <div className="eventDate">Febuary 11, 2020</div>
          <button className="leaveEvent">Leave Event</button>
        </div>
        <div className="eventSuggestions">
          <GroupSuggestions />
        </div>
      </div>
    );
  }
}

export default EventDetails;
