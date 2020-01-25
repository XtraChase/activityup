import React from "react";

export const UpVote = props => (
  <>
    <img
      className="upVoteArrow"
      src="images/Arrow.png"
      alt="Up Vote Arrow"
      width="15px"
      onClick={() => props.handleArrowClick(props.activity)}
    />
    <p className="upVoteCount">{props.count}</p>
  </>
);

export default UpVote;
