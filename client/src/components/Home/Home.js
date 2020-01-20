import React from "react";
import Header from "./Header";
import Title from "./Title";
import ActivityTypes from "./ActivityTypes";
import TrendingActivities from "./TrendingActivities";
import AdvertisedActivities from "./AdvertisedActivities";
import Footer from "./Footer";

function Body() {
  return (
    <div>
      <Header />
      <Title />
      <ActivityTypes />
      <TrendingActivities />
      <AdvertisedActivities />
      <Footer />
    </div>
  );
}

export default Body;
