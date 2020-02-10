import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class YourEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
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

  renderTitle() {
    return (
      <>
        <h1 className="categoryTitle" style={{ marginTop: "15px" }}>
          Events
        </h1>
      </>
    );
  }

  render() {
    const { events = [] } = this.state;
    return (
      <>
        <div>{events.length > 1 ? this.renderTitle() : ""}</div>
        <div className="imageRow">
          {events.map(event => (
            <Link
              // to={`/event/${event._id}`}
              key={event.eventName + Date.now()}
              className="imageColumn"
            >
              <img
                className="image"
                src={event.image}
                alt="activity type"
                width="100%"
              />
              <div className="text-block">
                <h4>{event.eventName}</h4>
                <h6>{event.date}</h6>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default YourEvents;
