import React from "react";
import YourGroups from "./YourGroups";
import YourEvents from "./YourEvents";
import GroupRecommendations from "./GroupRecommendations";

function Dashboard() {
  return (
    <>
      <div className="headerBuffer"></div>
      <YourGroups />
      <GroupRecommendations />
      <YourEvents />
    </>
  );
}

export default Dashboard;
