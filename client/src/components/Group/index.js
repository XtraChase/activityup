import React from "react";
import EventDetails from "./EventDetails";
import Chat from "./Chat";
import Calender from "./Calender";
import "./styleGroup.css";

function Group() {
  return (
    <div>
      <div className="headerBuffer"></div>
      <div className="upperGroupArea">
        <EventDetails />
        <Chat />
      </div>
      <Calender />
    </div>
  );
}

export default Group;
