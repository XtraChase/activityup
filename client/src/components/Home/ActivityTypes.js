import React, { Component } from "react";
// import { Link } from "react-router-dom";
import activities from "../../utils/activityTypes.json";
import ActivityType from "./ActivityType";

// ***** MAPPED VERSION *****
class ActivityTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities
    };
  }

  // ACTIVITIES ARE MAPPED THROUGH AND RENDERED
  render() {
    return (
      <>
        <div className="activityTypesRow">
          {this.state.activities &&
            this.state.activities.map(activity => (
              <ActivityType title={activity.title} image={activity.image} />
            ))}
        </div>
      </>
    );
  }
}

export default ActivityTypes;
