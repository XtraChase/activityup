import React, { Component } from "react";
import eventExample from "../../utils/eventExample.json";
import API from "../../utils/API";
import { ReactSVG } from "react-svg";
import Activity from "./Activity";

// ACTIVITIES THAT ARE DISPLAYED IN THE GROUPS PAGE IN THE EVENTS SECTION
class GroupSuggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      eventExample,
      event: 0
    };
    // this.update = this.update.bind(this);
    // this.handleUpVote = this.handleUpVote.bind(this);
  }
  // TODO Clicking the upvote arrow needs to increment by 1 and change arrow.svg color
  // TODO The upvote needs to be associated with the event or activity
  // TODO Incremented vote needs to post to database
  // TODO Clicking an upvoted arrow again removes the increment and changes the arrow color back
  update(e) {
    let upvotes = e.target.upvotes;
    let value = e.target.value;
    this.setState({
      [upvotes]: value
    });
  }

  handleUpVote = id => {
    console.log(`we're in handleUpVote: ${id}`);
    API.putActivity(id);
  };

  componentDidMount() {
    this.getActivities();
  }

  getActivities() {
    // console.log(this);
    API.getActivities().then(response => {
      this.setState({
        activities: response.data
      });
    });
    // .then(() => this.populateActivities());
  }

  renderActivites() {
    if (this.state.groups.activities) {
      let activitydivs = this.state.activities.map(g => {
        // console.log(g);
        return (
          <div
            to="/activities"
            key={g.ActivityName + Date.now()}
            className="imageColumn"
          >
            <img
              className="image"
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/09/National-Video-Game-Day-796x416.jpg"
              alt="activity type"
              width="100%"
            />
            <div className="text-block">
              <h4>{g.activityName}</h4>
            </div>
          </div>
        );
      });
      return activitydivs;
    }
    return null;
  }

  // ACTIVITIES ARE MAPPED THROUGH AND RENDERED
  //TODO displayed activities needs to be mapped through the group's database for the specified event date.
  render() {
    return (
      <>
        <div className="imageRow">
          {this.state.activities &&
            this.state.activities.map(activity => (
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

export default GroupSuggestions;
