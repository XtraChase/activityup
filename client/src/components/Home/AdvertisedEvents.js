import React, { Component } from "react";
import Activities from "../../utils/activities.json";
import API from "../../utils/API";
import Activity from "../Activity";

// EVENTS THAT ARE DISPLAYED ON ANY PAGE PAGE
// TODO Refer to Groups>GroupSuggestions for example of how this shall work
class AdvertisedEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Activities,
      activity: "",
      advertisedEvents: null
    };
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  handleUpVote(e) {
    console.log(e.target);
    this.setState({ upvotes: this.state.Activities[0].upvotes + 1 });
    console.log("Activity Upvoted!", this.state.Activities[0].upvotes);
  }

  getEvents() {
    API.getAdvertisedEvents()
      .then(response => this.setState({ advertisedEvents: response.data }))
      .catch(err => console.log(err));
  }

  renderEvents() {
    if (this.state.advertisedEvents) {
      return this.state.advertisedEvents.map(e => {
        return (
          <Activity
            key={e.id}
            id={e.id}
            image={e.images[0].url}
            activity={e.name}
            getActivities={this.handleUpVote.bind(this)}
          />
        );
      });
    }
  }

  render() {
    return (
      <>
        <div className="imageRow">
          {this.renderEvents()}
          {this.state.Activities.map(activity => (
            <Activity
              key={activity._id}
              id={activity._id}
              image={activity.image}
              activity={activity.activity}
              getActivities={this.handleUpVote.bind(this)}
              update={this.update}
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
