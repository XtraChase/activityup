import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../utils/API";

// EVENT CREATION FOR GROUPS

  // DONE When a day is clicked on the groups calender a modal pops up | SEE ./Calender.js for handleclick()
  // TODO on submit event name is displayed on calender
  // TODO on submit event is added to database for the group's events
export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      subtitle: "",
      about: "",
      category: "",
      date: this.props.date,
      imageUrl: ""
    }
    console.log(props)
    this.handleChange = this.handleChange.bind(this);
    this.createEvent = this.createEvent.bind(this);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  createEvent(e) {
    console.log(this.state);
    e.preventDefault();
    API.createEvent({
      eventName: this.state.eventName,
      subtitle: this.state.subtitle,
      about: this.state.about,
      category: this.state.category,
      imageUrl: this.state.imageUrl,
      date: this.props.date
    })
      .then(newEvent => console.log(newEvent))
      .catch(err => console.log(err.response));
    this.setState({
      eventName: "",
      subtitle: "",
      about: "",
      category: "",
      // date: this.props.date,
      imageUrl: ""
    });
  };

  render() {
    const date = this.props.date;
    console.log(date);
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add A New Event
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={this.createEvent}>
          <Modal.Body>
            <label>
              Date: 
              <input 
              type="text"
              name="date"
              value={date}
              />
            </label>
            <label>
              Event Name:
              <input
                type="text"
                name="eventName"
                value={this.state.eventName}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Subtitle:
              <input
                type="text"
                name="subtitle"
                value={this.state.subtitle}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              />
            </label>
            <label>
              About:
              <input
                type="text"
                name="about"
                value={this.state.about}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Image Url:
              <input
                type="text"
                name="imageUrl"
                value={this.state.imageUrl}
                onChange={this.handleChange}
              />
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button 
            type="submit" 
            onClick={this.props.onHide}
            >Create Event</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
