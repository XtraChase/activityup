import React from "react";
import Header from "./Header";
import Chat from ".//Chat/Chat";
import Calender from "./Calender";
import Footer from "../Footer";

function Group() {
  return (
    <div>
      <Header />
      <div className="headerBuffer"></div>
      <Chat />
      <Calender />
      <Footer />
    </div>
  );
}

export default Group;
