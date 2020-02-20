import React, { Component } from "react";
import API from "../../utils/API";
import Activity from "../Activity";
import uuid from "uuid";

// ACTIVITIES THAT ARE DISPLAYED IN THE GROUPS PAGE IN THE EVENTS SECTION
class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
    this.getActivities = this.getActivities.bind(this);
  }

  componentDidMount() {
    this.getActivities();
  }

  getActivities() {
    API.getActivities().then(response => {
      this.setState({
        activities: response.data
      });
    });
  }

  // TODO Clicking the upvote arrow changes color to orange
  // TODO Clicking an upvoted arrow again removes the increment and changes the arrow color back
  handleUpVote = id => {
    const { getActivities } = this;
    API.putActivity(id).then(() => getActivities());
    this.setState({ upvoted: (this.upvoted = true) });
    // FIXME needs to show upvoted # from database without refresh of page
  };

  // handleUpVote = id => {
  //   API.putActivity(id).then(response => {
  //     this.setState({
  //       upvoted: (this.upvoted = true),
  //       activities: response.data
  //     });
  //   });
  // };

  // ACTIVITIES ARE MAPPED THROUGH AND RENDERED
  render() {
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
        <div className="imageRow">
          {this.state.activities &&
            this.state.activities.map(activity => (
              <Activity
                key={uuid.v4()}
                id={activity._id}
                image={activity.image}
                style={inputStyle}
                activity={activity.activityName}
                getActivities={this.handleUpVote.bind(this)}
                subtitle={activity.subtitle}
                upvotes={activity.upvotes}
              />
            ))}
        </div>
      </>
    );
  }
}

export default Activities;
