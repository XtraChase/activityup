import React from "react";
import ActivityUpTitle from "../../images/ActivityUP-Logo(with-people).png";

function Title() {
  return (
    <div className="titleImageContainer">
      <img
        className="titleImage"
        src={ActivityUpTitle}
        alt="ActivityUp Title"
      />
    </div>
  );
}

export default Title;
