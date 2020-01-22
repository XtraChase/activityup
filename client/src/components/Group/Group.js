import React from "react";
import Header from "./Header";
import ChatApp from "./Chat/ChatApp";
import Calender from "./Calender";
import Footer from "../Footer";

function Group() {
  return (
    <div>
      <Header />
      <div className="headerBuffer"></div>
      <ChatApp />
      <Calender />
      <Footer />
    </div>
  );
}

export default Group;
