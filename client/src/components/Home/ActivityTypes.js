import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import activityTypes from "../../utils/activityTypes.json";
import ActivityType from "./ActivityType";
import Activity from "../Activity";
import API from "../../utils/API";

// ***** MAPPED VERSION *****
class ActivityTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityTypes,
      activities: [],
      activity: "",
      advertisedEvents: null
    };
  }

  selectActivity = title => {
    this.setState({ activity: title });
    console.log(this.state.activity);
    // FIXME redirect after setting the set
    return <Redirect to="/activity"></Redirect>;
  };

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

  // ACTIVITIES ARE MAPPED THROUGH AND RENDERED
  render() {
    return (
      <>
        <div className="activityTypesRow">
          {this.state.activityTypes &&
            this.state.activityTypes.map(activity => (
              // <Link to="/activity">
              <ActivityType
                id={activity.id}
                title={activity.title}
                image={activity.image}
                getActivity={this.selectActivity.bind(this)}
              />
              // </Link>
            ))}
        </div>

        <div className="imageRow events">
          {this.renderEvents()}
          {this.state.activities.map(activity => (
            <Activity
              key={activity._id}
              id={activity._id}
              image={activity.image}
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

export default ActivityTypes;
