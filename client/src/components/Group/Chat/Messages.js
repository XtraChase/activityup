import React, { Component } from "react";
import Message from "./Message";
import messages from "../../../utils/messages.json";
import uuid from "uuid";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages,
      message: ""
    };
  }

  onChange = e => this.setState({ [e.target.message]: e.target.value });

  // Chat message submitted

  // Add Todo
  addMessage = message => {
    const newMessage = {
      id: uuid.v4(),
      userName: "",
      message
    };
    this.setState({ messages: [...this.state.messages, newMessage] });
  };

  handleKeyDown = e => {
    // e.preventDefault();

    //if ENTER key is clicked
    if (e.key === "Enter") {
      this.addMessage(this.state.message);
      console.log("Message: ", this.state.message);
      this.setState({ message: "" });
    }
  };

  // TODO chat messages are displayed in body
  // TODO messages are associated with user
  // TODO other group member's messages are associated and displayed
  render() {
    return (
      <>
        <div className="chatBody">
          {this.state.messages &&
            this.state.messages.map(message => (
              <Message
                id={message.id}
                message={message.message}
                username={message.username}
              />
            ))}
        </div>
        <div className="chatInputContainer">
          <input
            className="chatInput"
            type="text"
            onKeyDown={this.handleKeyDown}
            // value={this.state.message}
            onChange={this.onChange}
          />
        </div>
      </>
    );
  }
}

export default Messages;
