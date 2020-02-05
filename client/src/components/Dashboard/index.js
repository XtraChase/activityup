import React from "react";
import Header from "../Header";
import YourGroups from "./YourGroups";
import YourEvents from "./YourEvents";
import GroupRecommendations from "./GroupRecommendations";
import Footer from "../Footer";

function Dashboard(props) {
  return (
    <div>
      <Header
        authenticated={props.authenticated}
        username={props.username}
        updateUser={props.updateUser}
      />
      <div className="headerBuffer"></div>
      <YourGroups />
      <GroupRecommendations />
      <YourEvents />
      <Footer />
    </div>
  );
}

export default Dashboard;
