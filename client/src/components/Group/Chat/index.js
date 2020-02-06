import React, { Component } from "react";
import Messages from "./Messages";

// GROUP CHAT
class Chat extends Component {
  render() {
    return (
      <div className="chatPage">
        <h1 className="chatTitle">Group Chat</h1>
        <Messages />
      </div>
    );
  }
}

export default Chat;
