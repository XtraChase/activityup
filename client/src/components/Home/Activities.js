import React, { Component, Link } from "react";
import Activities from "../../utils/activities.json";
// import { ReactSVG } from "react-svg";
import API from "../../utils/API";
import UpVote from "./UpVote";

class AdvertisedActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Activities,
      activity: "",
      upvotes: null
    };
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote(e) {
    console.log(e.target);
    this.setState({ upvotes: this.state.Activities[0].upvotes + 1 });
    // console.log("Activity Upvoted!", this.state.Activities[0].upvotes);
  }

  getActivitiesByGroup() {
    API.getActivitiesByGroup()
      .then(response => {
        if (response.data.group) {
          this.setState({
            activities: response.data.group._id
          });
        }
      })
      .then(() => this.populateActivities());
  }

  populateActivities() {
    if (this.state.activity) {
      API.getActivitiesByGroup(this.state.group.activites).then(activities => {
        console.log(activities);
        this.setState({
          // activities: activities.data
        });
      });
    }
  }

  renderActivites() {
    if (this.state.groups.activities) {
      let activitydivs = this.state.activities.map(g => {
        // console.log(g);
        return (
          <Link
            to="/activities"
            key={g.ActivityName + Date.now()}
            className="imageColumn"
          >
            <img
              className="image"
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/09/National-Video-Game-Day-796x416.jpg"
              alt="activity type"
              width="100%"
            />
            <div className="text-block">
              <h4>{g.activityName}</h4>
            </div>
          </Link>
        );
      });
      return activitydivs;
    }
    return null;
  }

  render() {
    return (
      <>
        <div className="imageRow">
          {this.state.Activities.map(activity => (
            <div className="imageColumn">
              <img
                className="image"
                width="100%"
                key={activity.id}
                src={activity.image}
                alt={activity.activity}
              />

              <UpVote
                upvotes={activity.upvotes}
                handleArrowClick={this.handleUpVote}
              />

              {/* <ReactSVG
                className="arrow"
                src="images/Arrow.svg"
                onClick={() => {
                  return activity.upvotes + 1;
                }}
              />
              <p className="upVoteCount">{activity.upvotes}</p>; */}

              <div className="text-block">
                <h4>{activity.activity}</h4>
                <p>{activity.subtitle}</p>
                <p>{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default AdvertisedActivities;
