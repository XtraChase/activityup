import React, { Component } from "react";
// import { Link } from "react-router-dom";
import activities from "../../utils/activityTypes.json";
import ActivityType from "./ActivityType";

// ***** MAPPED VERSION *****
class ActivityTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities,
      activity: ""
    };
  }

  selectActivity = title => {
    this.setState({ activity: title });
    // console.log(this.state.activity);
  };

  // ACTIVITIES ARE MAPPED THROUGH AND RENDERED
  render() {
    return (
      <>
        <div className="activityTypesRow">
          {this.state.activities &&
            this.state.activities.map(activity => (
              <ActivityType
                id={activity.id}
                title={activity.title}
                image={activity.image}
                getActivity={this.selectActivity.bind(this)}
              />
            ))}
        </div>
      </>
    );
  }
}

export default ActivityTypes;
