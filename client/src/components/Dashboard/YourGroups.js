import React from "react";
import { Link } from "react-router-dom";

function YourGroups() {
  return (
    <div>
      <div className="advertised">
        <h1>Your Groups</h1>
        <div className="advertisedRow">
          <Link to="/Group" className="advertisedColumn upVoteableImage">
            <img
              className="GroupImage"
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/09/National-Video-Game-Day-796x416.jpg"
              alt="activity type"
              width="100%"
            />
            <div className="text-block">
              <h4>Gaming Group</h4>
              <p>Tuesday night is game night!</p>
            </div>
          </Link>

          <Link to="/Group" className="advertisedColumn upVoteableImage">
            <img
              className="GroupImage"
              src="https://www.iloveblackandwhitephotography.com/wp-content/uploads/MattMitschke.jpg"
              alt="activity type"
              width="100%"
            />
            <div className="text-block">
              <h4>Photography Group</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default YourGroups;
