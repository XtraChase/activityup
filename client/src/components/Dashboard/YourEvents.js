import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class YourEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      events: null
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    API.getUser()
      .then(response => {
        if (response.data.user) {
          this.setState({
            user: response.data.user._id
          });
        }
      })
      .then(() => this.populateEvents());
  }

  populateEvents() {
    if (this.state.user) {
      API.getEvents().then(events => {
        console.log(events);
        this.setState({
          events: events.data
        });
      });
    }
  }

  renderEvents() {
    if (this.state.events) {
      let eventdivs = this.state.events.map(g => {
        // console.log(g);
        return (
          <Link
            to="/group"
            key={g.eventName + Date.now()}
            className="imageColumn"
          >
            <img
              className="image"
              src={g.imageUrl}
              alt="activity type"
              width="100%"
            />
            <div className="text-block">
              <h4>{g.eventName}</h4>
            </div>
          </Link>
        );
      });
      return eventdivs;
    }
    return null;
  }

  render() {
    return (
      <>
        <h1>Events</h1>
        <div className="imageRow">
          {this.state.events
            ? this.renderEvents()
            : "There are no upcoming events"}
        </div>
      </>
    );
  }
}

export default YourEvents;
