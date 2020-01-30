import React, { Component, Link } from "react";
import eventExample from "../../utils/eventExample.json";
import API from "../../utils/API";
import UpVote from "./UpVote";

class GroupSuggestions extends Component {
  state = {
    eventExample,
    event: 0
  };

  handleUpVote = activity => {
    console.log("Activity Upvoted!");
    // let update = {
    //   upvotes: this.state.upvotes
    // };
  };

  getActivitiesByGroup() {
    API.getActivitiesByGroup()
      .then(response => {
        if (response.data.group) {
          this.setState({
            activities: response.data.group._id
          });
        }
      })
      .then(() => this.populateActivities());
  }

  populateActivities() {
    if (this.state.activity) {
      API.getActivitiesByGroup(this.state.group.activites).then(activities => {
        console.log(activities);
        this.setState({
          // activities: activities.data
        });
      });
    }
  }

  renderActivites() {
    if (this.state.groups.activities) {
      let activitydivs = this.state.activities.map(g => {
        // console.log(g);
        return (
          <>
            <img
              className="image"
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/09/National-Video-Game-Day-796x416.jpg"
              alt="activity type"
              width="100%"
            />
            <div className="text-block">
              <h4>{g.activityName}</h4>
            </div>
          </>
        );
      });
      return activitydivs;
    }
    return null;
  }

  render() {
    return (
      <>
        <div className="imageRow">
          {this.state.eventExample[this.state.event].event[0].activities.map(
            activity => (
              <div className="imageColumn">
                <img
                  className="groupSuggestion"
                  width="100%"
                  key={activity.id}
                  src={activity.image}
                  alt={activity.date}
                />
                <UpVote
                  activity={activity.id}
                  upvotes={activity.upvotes}
                  handleArrowClick={this.handleUpVote}
                />
                <div className="groupSuggestionTextBlock">
                  <h4>{activity.activity}</h4>
                  <p>{activity.subtitle}</p>
                </div>
              </div>
            )
          )}
        </div>
      </>
    );
  }
}

export default GroupSuggestions;
