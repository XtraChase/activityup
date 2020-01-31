import React from "react";
import { ReactSVG } from "react-svg";

// FIXME should take in the upvotes and render the updated count
function UpVote(props) {
  return (
    <>
      <ReactSVG
        className="arrow"
        src="images/Arrow.svg"
        alt="Up Vote Arrow"
        onClick={props.handleArrowClick}
        upvotes={props.upvotes}
      />

      <p className="upVoteCount">{props.upvotes}</p>
    </>
  );
}

export default UpVote;
