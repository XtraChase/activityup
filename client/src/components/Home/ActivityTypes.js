import React from "react";
import activityTypes from "../../utils/activityTypes.json";
import ActivityType from "./ActivityType";

function ActivityTypes() {
  return (
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
  );
}

export default ActivityTypes;
