import React from "react";
import Header from "../Header";
import YourGroups from "./YourGroups";
import GroupRecommendations from "./GroupRecommendations";
import Footer from "../Footer";

function Dashboard(props) {
  return (
    <div>
      <Header authenticated={props.authenticated}/>
      <div className="headerBuffer"></div>
      <YourGroups />
      <GroupRecommendations />
      <Footer />
    </div>
  );
}

export default Dashboard;
