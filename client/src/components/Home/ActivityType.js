import React from "react";

function Activity(props) {
  const { image, title } = props;

  return (
    <>
      <div className="activityTypesColumn" key={title + Date.now()}>
        <div className="activityTypeContainer">
          <img
            src={image}
            alt={title}
            width="100%"
            className="activityTypesImage"
          />
          <p className="activityTypesText">{title.toUpperCase()}</p>
        </div>
      </div>
    </>
  );
}

export default Activity;
