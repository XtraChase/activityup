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
        // console.log(events);
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
        <div>{events && events.length ? this.renderTitle() : ""}</div>
        <div className="imageRow">
          {events.map(event => (
            <Link
              // TODO when clicking on a user created event go to group id url for that event
              to={`/event/${event._id}`}
              key={event.title + Date.now()}
              className="imageColumn"
            >
              <img
                className="image"
                src={event.image}
                alt="activity type"
                width="100%"
              />
              <div className="text-block">
                <h4>{event.title}</h4>
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
