import React from "react";
import { ReactSVG } from "react-svg";

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
