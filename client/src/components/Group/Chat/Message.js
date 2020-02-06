import React from "react";

function Message(props) {
  const { id, message, username } = props;

  return (
    <>
      <div key={id} style={{ padding: "10px" }}>
        <div>{username}</div>
        <div style={{ fontSize: "1.5em" }}>{message}</div>
      </div>
    </>
  );
}

export default Message;
