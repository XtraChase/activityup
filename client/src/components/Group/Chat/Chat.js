import React, { Component } from "react";
// import Emoji from "react-emoji-render";
// import Picker from 'emoji-picker-react';

class Chat extends Component {
  handleKeyDown = e => {
    //if ENTER key is clicked
    if (e.key === "Enter") {
      console.log("Chat Message Entered");
    }
  };

  render() {
    return (
      <div className="chatPage">
        <h1 className="chatTitle">Group Chat</h1>
        <div className="chatBody"></div>
        <div className="chatInputContainer">
          <input
            className="chatInput"
            type="text"
            onKeyDown={this.handleKeyDown}
          />
        </div>
      </div>
    );
  }
}

export default Chat;
