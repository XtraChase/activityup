import React, { Component } from "react";
import Header from "../Header";
import Title from "./Title";
import ActivityTypes from "./ActivityTypes";
import Footer from "../Footer";

class Body extends Component {
  callbackFunction = title => {
    this.props.parentCallback(title);
  };

  render() {
    return (
      <>
        <Header
          authenticated={this.props.authenticated}
          username={this.props.username}
          updateUser={this.props.updateUser}
        />
        <div className="headerBuffer"></div>
        <Title />
        <ActivityTypes parentCallback={this.callbackFunction} />
        <Footer />
      </>
    );
  }
}

export default Body;
