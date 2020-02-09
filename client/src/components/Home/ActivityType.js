import React from "react";
import { Link } from "react-router-dom";

function Activity(props) {
  const { id, image, title } = props;

  return (
    <Link
      to={`filteredEvents/${title}`}
      className="activityTypesColumn"
      key={id + Date.now()}
    >
      <div className="activityTypeContainer">
        <img
          src={image}
          alt={title}
          width="100%"
          className="activityTypesImage"
        />

        <p className="activityTypesText">{title.toUpperCase()}</p>
      </div>
    </Link>
  );
}

export default Activity;
