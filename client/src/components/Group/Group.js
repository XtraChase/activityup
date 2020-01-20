import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Group() {
  return (
    <div>
      <Header />>
      <div className="bodyContainer">
        <h1>welcome to your group</h1>
        <Link to="#" className="newGroupBtn">
          Create A New Event
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Group;
