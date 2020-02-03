import React, { Component } from "react";
import API from "../../utils/API";
import Activity from "../Activity";

// EVENTS THAT ARE DISPLAYED ON ANY PAGE
class AdvertisedEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      activity: "",
      advertisedEvents: null
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  handleUpVote = id => {
    // API.putActivity(id);
    this.setState({ upvoted: (this.upvoted = true) });
  };

  // Gets events from Ticketmaster
  getEvents() {
    API.getAdvertisedEvents()
      .then(response => this.setState({ advertisedEvents: response.data }))
      .catch(err => console.log(err));
  }

  // Renders events from Ticketmaster
  renderEvents() {
    let inputStyle = this.upvoted
      ? {
          fill: "#ff8900",
          stroke: "#ff8900"
        }
      : {
          fill: "rgba(255, 255, 255, 0.7)",
          stroke: "rgba(255, 255, 255, 0.5)"
        };
    if (this.state.advertisedEvents) {
      return this.state.advertisedEvents.map(e => {
        return (
          <Activity
            key={e.id}
            id={e.id}
            image={e.images[0].url}
            activity={e.name}
            getActivities={this.handleUpVote.bind(this)}
            style={inputStyle}
          />
        );
      });
    }
  }

  render() {
    return (
      <>
        <div className="imageRow events">
          {this.renderEvents()}
          {this.state.activities.map(activity => (
            <Activity
              key={activity._id}
              id={activity._id}
              image={activity.image}
              activity={activity.activity}
              getActivities={this.handleUpVote.bind(this)}
              // update={this.update}
              activity={activity.activity}
              subtitle={activity.subtitle}
              upvotes={activity.upvotes}
            />
          ))}
        </div>
      </>
    );
  }
}

export default AdvertisedEvents;
