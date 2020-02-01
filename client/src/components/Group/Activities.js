import React, { Component } from "react";
import API from "../../utils/API";
import Activity from "../Activity";

// ACTIVITIES THAT ARE DISPLAYED IN THE GROUPS PAGE IN THE EVENTS SECTION
class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      event: 0
    };
  }

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
  }

  // TODO Clicking the upvote arrow changes color to orange
  // TODO Clicking an upvoted arrow again removes the increment and changes the arrow color back
  handleUpVote = id => {
    console.log(`we're in handleUpVote: ${id}`);
    API.putActivity(id);
  };

  // ACTIVITIES ARE MAPPED THROUGH AND RENDERED
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
