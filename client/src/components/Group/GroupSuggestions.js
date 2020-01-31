import React, { Component } from "react";
import eventExample from "../../utils/eventExample.json";
import API from "../../utils/API";
import { ReactSVG } from "react-svg";

// ACTIVITIES THAT ARE DISPLAYED IN THE GROUPS PAGE IN THE EVENTS SECTION
class GroupSuggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventExample,
      event: 0,
      upvotes: 10
    };
    this.update = this.update.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
  }
  // TODO Clicking the upvote arrow needs to increment by 1 and change arrow.svg color
  // TODO The upvote needs to be associated with the event or activity
  // TODO Incremented vote needs to post to database
  // TODO Clicking an upvoted arrow again removes the increment and changes the arrow color back
  update(e) {
    let upvotes = e.target.upvotes;
    let value = e.target.value;
    this.setState({
      [upvotes]: value
    });
  }

  handleUpVote = () => {
    console.log("Activity Upvoted!");
    this.setState({ upvotes: this.state.upvotes + 1 });
    console.log(this.state.upvotes);
  };

  // FIXME API Get for Activities associated with a particular event
  getActivitiesByEvent() {
    API.getActivitiesByEvent()
      .then(response => {
        if (response.data.group) {
          this.setState({
            activities: response.data.group._id
          });
        }
      })
      .then(() => this.populateActivities());
  }

  // FIXME API Get for populating the activities
  populateActivities() {
    if (this.state.activity) {
      API.getActivitiesByEvent(this.state.event.activites).then(activities => {
        console.log(activities);
        this.setState({
          // activities: activities.data
        });
      });
    }
  }

  // ACTIVITIES ARE MAPPED THROUGH AND RENDERED
  //TODO displayed activities needs to be mapped through the group's database for the specified event date.
  render() {
    let displayUpVotes = <p className="upVoteCount">{this.state.upvotes}</p>;
    return (
      <>
        <div className="imageRow">
          {this.state.eventExample[this.state.event].event[0].activities.map(
            activity => (
              <div className="imageColumn">
                <img
                  className="groupSuggestion"
                  width="100%"
                  key={activity.id}
                  src={activity.image}
                  alt={activity.date}
                />
                <ReactSVG
                  className="arrow"
                  src="images/Arrow.svg"
                  alt="Up Vote Arrow"
                  activity={activity.id}
                  upvotes={activity.upvotes}
                  value={this.state.upvotes}
                  onClick={this.handleUpVote}
                  onChange={this.update}
                />
                <p className="upVoteCount">{this.state.upvotes}</p>;
                <div className="groupSuggestionTextBlock">
                  <h4>{activity.activity}</h4>
                  <p>{activity.subtitle}</p>
                </div>
              </div>
            )
          )}
        </div>
      </>
    );
  }
}

export default GroupSuggestions;
