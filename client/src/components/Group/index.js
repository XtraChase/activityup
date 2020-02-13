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
    console.log(this.state.events);

    return (
      <div>
        <div className="headerBuffer"></div>
        <div className="upperGroupArea">
          <EventDetails
          // TODO activities={this.getEvent()}
          // TODO Update EventDetails to take in "events" to display instead of fetching from api
          />
          <Chat />
        </div>

        <Calender
          groupId={group}
          // groupEvents={this.state.events}
          // TODO display events on the calender
          // TODO Click and grad date and filter with that
          // TODO onEventSelect={(eventID) => this.setState({eventSelected: eventID})}
          // TODO onChange = Clicking on event on the calender.
        />
        <div className="imageRow events" style={{ paddingBottom: "50px" }}>
          <h2 style={{ margin: "-20px 0 10px 15px", color: "#ff8900" }}>
            Upcoming Group Events
          </h2>
          {this.state.events.map(event => (
            <div
              className="imageColumn"
              category={event.category}
              title={event.title}
              date={event.date}
              key={event.id}
            >
              <img
                className="groupSuggestion"
                width="100%"
                id={event.id}
                src={event.image}
                alt={event.title}
              />

              <div className="groupSuggestionTextBlock">
                <h4>{event.title}</h4>
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
