import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function ActivityType(props) {
  return (
    <div>
      <Header authenticated={props.authenticated}/>
      <div className="headerBuffer"></div>
      <div>
      <div>
        <h1>Your Activity</h1>
        <div className="imageRow">
          <div className="imageColumn">
            <img
              className="image"
              src="https://s3.amazonaws.com/activejunky-cdn/aj-content/hikinggroup.jpg"
              alt="activity type"
              width="100%"
            />
            <div className="text-block">
              <h4>Hiking at Apalaches</h4>
            </div>
          </div>
        </div>
      </div>
    </div>     
      <Footer />
    </div>
  );
}

export default ActivityType ;
