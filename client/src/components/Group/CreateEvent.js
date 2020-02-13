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
      title: "",
      subtitle: "",
      about: "",
      category: "",
      date: this.props.date,
      image: ""
    };
    // console.log(props);
    this.handleChange = this.handleChange.bind(this);
    this.createEvent = this.createEvent.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  createEvent(e) {
    // console.log(this.state);
    e.preventDefault();
    API.createEvent({
      title: this.state.title,
      subtitle: this.state.subtitle,
      about: this.state.about,
      category: this.state.category,
      image: this.state.image,
      date: this.props.date,
      group: this.props.group
    })
      .then(newEvent => console.log(newEvent))
      .catch(err => console.log(err.response));
    this.setState({
      title: "",
      subtitle: "",
      about: "",
      category: "",
      date: this.props.date,
      image: ""
    });
  }

  render() {
    const date = this.props.date;
    // console.log(date);
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add A New Event for {date}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={this.createEvent}>
          <Modal.Body>
            <label>
              Event Name:
              <input
                type="text"
                name="title"
                value={this.state.title}
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
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              onClick={this.props.onHide}
              style={{ paddingBottom: "32px" }}
            >
              Create Event
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
