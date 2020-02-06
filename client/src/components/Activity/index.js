import React from "react";
import { ReactSVG } from "react-svg";

function Activity(props) {
  const {
    image,
    activity,
    upvotes,
    // update,
    subtitle,
    getActivities,
    style,
    id
  } = props;

  return (
    <>
      <div className="imageColumn">
        <img
          className="groupSuggestion"
          width="100%"
          id={id}
          src={image}
          alt={activity}
        />
        <ReactSVG
          className="arrow"
          src="images/Arrow.svg"
          alt="Up Vote Arrow"
          activity={activity}
          onClick={() => {
            getActivities(id);
          }}
          style={style}
          // onChange={update}
        />
        <p className="upVoteCount">{upvotes}</p>
        <div className="groupSuggestionTextBlock">
          <h4>{activity}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
}

export default Activity;
