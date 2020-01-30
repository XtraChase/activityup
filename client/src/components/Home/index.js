import React from "react";
import Header from "../Header";
import Title from "./Title";
import ActivityTypes from "./ActivityTypes";
import AdvertisedActivities from "./AdvertisedActivities";
import Activities from "./Activities";
import Footer from "../Footer";

function Body(props) {
  return (
    <div>
      <Header
        authenticated={props.authenticated}
        username={props.username}
        updateUser={props.updateUser}
      />
      <div className="headerBuffer"></div>
      <Title />
      <ActivityTypes />
      <AdvertisedActivities />
      <Activities />
      <Footer />
    </div>
  );
}

export default Body;
