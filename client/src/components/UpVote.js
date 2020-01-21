import React from "react";
import UpArrow from "../../images/Arrow.png";
import UpArrowOn from "../../images/Arrow(clicked).png";

function UpVote() {
  if ({UpArrow}.clicked == true) {
    return(      
        <img
          className="upVoteArrow"
          src={UpArrowOn}
          alt="Up Vote Arrow"
          width="15px"
        />
    )
  } else ({UpArrowOn}.clicked == true) {
    return(
      <img
        className="upVoteArrow"
        src={UpArrow}
        alt="Up Vote Arrow"
        width="15px"
      />
    )
  }
}

export default UpVote