import React from "react";

function GroupRecommendations() {
  return (
    <div>
      <div className="advertised">
        <h1>Recommended Groups</h1>
        <div className="advertisedRow">
          <div className="advertisedColumn upVoteableImage">
            <img
              className="GroupImage"
              src="https://s3.amazonaws.com/activejunky-cdn/aj-content/hikinggroup.jpg"
              alt="activity type"
              width="100%"
            />
            <div class="text-block">
              <h4>Hiking Group</h4>
              <p>Just out here doin it!</p>
            </div>
          </div>
          <div className="advertisedColumn upVoteableImage">
            <img
              className="GroupImage"
              src="https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2017/01/falconsflags_getty_oneuseonly.jpg"
              alt="activity type"
              width="100%"
            />
            <div class="text-block">
              <h4>Falcons Sports Group</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupRecommendations;
