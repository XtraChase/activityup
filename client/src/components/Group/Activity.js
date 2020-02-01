import React from "react";
import { ReactSVG } from "react-svg";

function Activity(props) {
  const {
    image,
    activity,
    upvotes,
    key,
    update,
    subtitle,
    getActivities,
    id
  } = props;

  return (
    <>
      <div className="imageColumn">
        <img
          className="groupSuggestion"
          width="100%"
          key={key}
          src={image}
          alt={activity}
        />
        <ReactSVG
          className="arrow"
          src="images/Arrow.svg"
          alt="Up Vote Arrow"
          activity={activity}
          onClick={() => {
            console.log(id);
            getActivities(id);
          }}
          onChange={update}
        />
        <p className="upVoteCount">{upvotes}</p>;
        <div className="groupSuggestionTextBlock">
          <h4>{activity}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
}

export default Activity;
