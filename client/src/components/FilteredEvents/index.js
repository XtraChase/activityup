import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Activity from "../Activity";

class FilteredEvents extends Component {
  constructor(props) {
    super(props);
  }

  // get API for events and set the category according to the url category
  // componentDidMount() {
  //   this.getEvents();
  // }

  // // Gets events from Ticketmaster
  // getEvents = () => {
  //   API.getAdvertisedEvents()
  //     .then(response => console.log(response))
  //     .catch(err => console.log(err));
  // };

  // FIXME upvote based on id
  // TODO add upvoted API event to database
  handleUpVote = id => {
    // API.putActivity(id);
    this.setState({ upvoted: (this.upvoted = true) });
  };

  render() {
    const { APIevents = [] } = this.props;
    const category = this.props.match.params.category || "";

    // Get the category of the event from the API
    const getCategory = event => event.classifications[0].segment.name;

    // Filter the event based on category
    const filterEvent = event =>
      getCategory(event).toLowerCase() === category.toLowerCase();

    // If selected activity type category is empty show all API events else filter them
    const filteredEvents =
      category === "" ? APIevents : APIevents.filter(filterEvent);

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
        <Header
          authenticated={this.props.authenticated}
          username={this.props.username}
          updateUser={this.props.updateUser}
        />
        <div className="headerBuffer"></div>

        <h1>{category}</h1>

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

        <Footer />
      </>
    );
  }
}

export default FilteredEvents;
