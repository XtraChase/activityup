import React from "react";
import Header from "./Header";
import YourGroups from "./YourGroups";
import GroupRecommendations from "../GroupRecommendations";
import Footer from "../Footer";
import "./style.scss";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="headerBuffer"></div>
      <YourGroups />
      <GroupRecommendations />
      <Footer />
    </div>
  );
}

export default Dashboard;
