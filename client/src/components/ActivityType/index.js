import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function ActivityType(props) {
  return (
    <div>
      <Header
        authenticated={props.authenticated}
        username={props.username}
        updateUser={props.updateUser}
      />
      <div className="headerBuffer"></div>
      <div>
        <div>
          <h1>{props.category}</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ActivityType;
