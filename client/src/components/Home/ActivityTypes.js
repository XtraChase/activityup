import React, { Component } from "react";
import activityTypes from "../../utils/activityTypes.json";
import ActivityType from "./ActivityType";
import API from "../../utils/API";

class ActivityTypes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* Activity Types */}
        <div className="activityTypesRow">
          {activityTypes &&
            activityTypes.map(types => (
              <ActivityType
                id={types.id}
                key={types.id}
                title={types.title}
                image={types.image}
              />
            ))}
        </div>
      </>
    );
  }
}

export default ActivityTypes;
