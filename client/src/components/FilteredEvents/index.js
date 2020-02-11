import React, { Component } from "react";
import Activity from "../Activity";
import API from "../../utils/API";

class FilteredEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upvoted: false
    };
  }

  componentDidMount() {
    this.populateEvents();
  }

  populateEvents() {
    API.getEvents().then(events => {
      console.log(events);
      this.setState({
        events: events.data
      });
    });
  }

  // FIXME upvote based on id
  // TODO add upvoted API event to database
  handleUpVote = id => {
    // API.putActivity(id);
    this.setState({ upvoted: (this.upvoted = true) });
  };

  render() {
    const { APIevents = [] } = this.props;
    const { events = [] } = this.state;
    const category = this.props.match.params.category || "";

    // Get the category of the event from the API
    const getCategory = event => event.classifications[0].segment.name;

    // Filter the event based on category
    const filterEvent = event =>
      getCategory(event).toLowerCase() === category.toLowerCase();

    // If selected activity type category is empty show all API events else filter them
    const filteredEvents =
      category === "" ? APIevents : APIevents.filter(filterEvent);

    // ********************************************************
    //Filter Locally sourced events
    // Get the category of the event from the user created event
    const getLocalCategory = event => event.category;

    // Filter the event based on category
    const filterLocalEvent = event =>
      getLocalCategory(event).toLowerCase() === category.toLowerCase();

    // If selected activity type category is empty show all user created events else filter them
    const filteredLocalEvents =
      category === "" ? events : events.filter(filterLocalEvent);

    // If upvoted change the upvote arrow to orange
    let inputStyle = this.upvoted
      ? {
          fill: "#ff8900",
          stroke: "#ff8900"
        }
      : {
          fill: "rgba(255, 255, 255, 0.7)",
          stroke: "rgba(255, 255, 255, 0.5)"
        };

    return (
      <>
        <div className="headerBuffer"></div>

        {/* API events */}
        <div className="imageRow events">
          {filteredEvents.map(event => (
            <Activity
              key={event.id}
              id={event.id}
              image={event.images[0].url}
              activity={event.name}
              getActivities={this.handleUpVote.bind(this)}
              style={inputStyle}
              category={event.classifications[0].segment.name}
            />
          ))}
        </div>
        {/* *********************************************************** */}
        {/* User Created Events */}
        <div className="imageRow events">
          {filteredLocalEvents.map(event => (
            <Activity
              key={event.eventName + Date.now()}
              id={event.eventName + Date.now()}
              image={event.image}
              activity={event.eventName}
              getActivities={this.handleUpVote.bind(this)}
              style={inputStyle}
              category={event.category}
            />
          ))}
        </div>
      </>
    );
  }
}

export default FilteredEvents;
