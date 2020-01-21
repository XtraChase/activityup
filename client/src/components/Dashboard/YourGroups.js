import React from "react";

function YourGroups() {
  return (
    <div>
      <div className="advertised">
        <h1>Your Groups</h1>
        <div className="advertisedRow">
          <div className="advertisedColumn upVoteableImage">
            <img
              className="activityTypesImage"
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/09/National-Video-Game-Day-796x416.jpg"
              alt="activity type"
              width="100%"
            />
            <div class="text-block">
              <h4>Gaming Group</h4>
              <p>Tuesday night is game night!</p>
            </div>
          </div>
          <div className="advertisedColumn upVoteableImage">
            <img
              className="activityTypesImage"
              src="https://www.iloveblackandwhitephotography.com/wp-content/uploads/MattMitschke.jpg"
              alt="activity type"
              width="100%"
            />
            <div class="text-block">
              <h4>Photography Group</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourGroups;
