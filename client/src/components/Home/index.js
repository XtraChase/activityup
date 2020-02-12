import React from "react";
import Title from "./Title";
import ActivityTypes from "./ActivityTypes";
import Footer from "../Footer";

function Body() {
  return (
    <>
      <div className="headerBuffer"></div>
      <Title />
      <ActivityTypes />
      <Footer />
    </>
  );
}

export default Body;
