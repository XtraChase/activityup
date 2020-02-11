import React, { Component } from "react";
import EventDetails from "./EventDetails";
import Chat from "./Chat";
import Calender from "./Calender";
import "./styleGroup.css";

import API from "./../../utils/API";

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.populateEvents();
  }

  populateEvents() {
    const group = this.props.match.params.groupid;
    API.getEventsByGroup(group).then(events => {
      this.setState({
        events: events.data
      });
    });
  }

  getActivies() {
    // TODO const {events, eventID} = this.state
    // TODO Filter by the ID in state
    // TODO return filtered event array
  }

  render() {
    const group = this.props.match.params.groupid;
    return (
      <div>
        <div className="headerBuffer"></div>
        <div className="upperGroupArea">
          {/* TODO Update EventDetails to take in "events" to display instead of fetching from api */}
          <EventDetails
          // TODO activities={this.getEvent()}
          />
          <Chat />
        </div>

        <Calender
          group={group}
          // TODO Click and grad date and filter with that

          // TODO onEventSelect={(eventID) => this.setState({eventSelected: eventID})}
          // TODO onChange = Clicking on event on the calender.
        />
        <div style={{ height: "600px", paddingBottom: "20px" }}>
          <h2 style={{ margin: "-20px 0 10px 15px", color: "#ff8900" }}>
            Events For This Group
          </h2>
          {/* Fetch and Display List */}
          {/* TODO display events on the calender */}
          {this.state.events.map(event => (
            <div className="imageColumn" category={event.category}>
              <img
                className="groupSuggestion"
                width="100%"
                id={event.id}
                src={event.image}
                alt={event.eventName}
              />

              <div className="groupSuggestionTextBlock">
                <h4>{event.eventName}</h4>
                <p>{event.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Group;
