import React from "react";
import Header from "../Header";
import Title from "./Title";
import ActivityTypes from "./ActivityTypes";
import AdvertisedActivities from "./AdvertisedActivities";
import Footer from "../Footer";

function Body(props) {
  return (
    <div>
      <Header authenticated={props.authenticated} />
      <div className="headerBuffer"></div>
      <Title />
      <ActivityTypes />
      <AdvertisedActivities />
      <Footer />
    </div>
  );
}

export default Body;
