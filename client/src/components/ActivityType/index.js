import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Body(props) {
  return (
    <div>
      <Header authenticated={props.authenticated} />
      <div className="headerBuffer"></div>
      <Footer />
    </div>
  );
}

export default Body;
