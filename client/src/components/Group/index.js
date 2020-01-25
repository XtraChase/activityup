import React from "react";
import Header from "../Header";
import EventDetails from "./EventDetails";
import Chat from "./Chat/Chat";
import Calender from "./Calender";
import AdvertisedActivities from "../Home/AdvertisedActivities";
import Footer from "../Footer";
import "./styleGroup.css";

function Group(props) {
  return (
    <div>
      <Header authenticated={props.authenticated} />
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
