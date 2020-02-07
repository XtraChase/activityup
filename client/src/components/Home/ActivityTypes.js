import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
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
      APIevents: [],
      category: ""
    };
  }

  selectActivity = title => {
    this.setState({ category: title });
    console.log(this.state.category);
    // FIXME redirect after setting the set
    // return <Redirect to="/activity"></Redirect>;
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
      .then(response => this.setState({ APIevents: response.data }))
      .catch(err => console.log(err));
  }

  // ACTIVITIES ARE MAPPED THROUGH AND RENDERED
  render() {
    const { category, APIevents, activityTypes } = this.state;

    const getCategory = event => event.classifications[0].segment.name;
    const filterEvent = event =>
      getCategory(event).toLowerCase() === category.toLowerCase();

    const filteredEvents =
      "" === category ? APIevents : APIevents.filter(filterEvent);

    let inputStyle = this.upvoted
      ? {
          fill: "#ff8900",
          stroke: "#ff8900"
        }
      : {
          fill: "rgba(255, 255, 255, 0.7)",
          stroke: "rgba(255, 255, 255, 0.5)"
        };

    return (
      <>
        {/* Activity Types */}
        <div className="activityTypesRow">
          {activityTypes &&
            activityTypes.map(types => (
              // <Link to="/activity">
              <ActivityType
                id={types.id}
                key={types.id}
                title={types.title}
                image={types.image}
                getActivity={this.selectActivity.bind(this)}
              />
              // </Link>
            ))}
        </div>

        {/* API events */}
        <div className="imageRow events">
          {filteredEvents.map(event => (
            <Activity
              key={event.id}
              id={event.id}
              image={event.images[0].url}
              activity={event.name}
              getActivities={this.handleUpVote.bind(this)}
              style={inputStyle}
              category={event.classifications[0].segment.name}
            />
          ))}
        </div>
      </>
    );
  }
}

export default ActivityTypes;
