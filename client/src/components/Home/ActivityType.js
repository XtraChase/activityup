import React from "react";

function Activity(props) {
  const { id, image, title, getActivity } = props;

  return (
    <>
      <div className="activityTypesColumn" key={id + Date.now()}>
        <div className="activityTypeContainer">
          <img
            src={image}
            alt={title}
            width="100%"
            className="activityTypesImage"
          />
          <p
            className="activityTypesText"
            onClick={() => {
              getActivity(title);
            }}
          >
            {title.toUpperCase()}
          </p>
        </div>
      </div>
    </>
  );
}

export default Activity;
