import React from "react";

export const UpVote = props => (
  <>
    <img
      className="upVoteArrow"
      src="images/Arrow.png"
      alt="Up Vote Arrow"
      width="15px"
      onClick={props.handleArrowClick}
      upvotes={props.upvotes}
    />
    <p className="upVoteCount">{props.upvotes}</p>
  </>
);

export default UpVote;
