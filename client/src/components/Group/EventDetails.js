import React, { Component } from "react";
import GroupSuggestions from "./GroupSuggestions";

class EventDetails extends Component {
  render() {
    return (
      <div className="eventDetailsPage">
        <div className="eventDetailsHeader">
          // TODO When suggest button is clicked a modal similiar to create
          group modal pops up for entering an activity info // TODO When
          submitted the activity is added to the event section associated with
          the specified date
          <button className="suggest">Suggest</button>
          <div className="eventDate">Febuary 11, 2020</div>
          // TODO Leave event button removes the event from the calender for the
          associated user
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
