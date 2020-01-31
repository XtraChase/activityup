import React, { Component } from "react";
// TODO connect Socket.io
// TODO connect emojis
// import Emoji from "react-emoji-render";
// import Picker from 'emoji-picker-react';

// GROUP CHAT
class Chat extends Component {
  // Chat message submitted
  handleKeyDown = e => {
    //if ENTER key is clicked
    if (e.key === "Enter") {
      console.log("Chat Message Entered");
    }
  };

  // TODO chat messages are displayed in body
  // TODO messages are associated with user
  // TODO other group member's messages are associated and displayed
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
