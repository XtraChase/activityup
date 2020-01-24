import React from "react";
import GroupHeader from "./GroupHeader";
import EventDetails from "./EventDetails";
import Chat from "./Chat/Chat";
import Calender from "./Calender";
import AdvertisedActivities from "../AdvertisedActivities";
import Footer from "../Footer";
// import "./style.css";

function Group() {
  return (
    <div>
      <GroupHeader />
      <div className="headerBuffer"></div>
      <div className="upperGroupArea">
        <EventDetails />
        <Chat />
      </div>
      <Calender />
      <AdvertisedActivities />
      <Footer />
    </div>
  );
}

export default Group;
