import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

// EVENT CREATION FOR GROUPS

  // DONE When a day is clicked on the groups calender a modal pops up | SEE ./Calender.js for handleclick()
  // TODO on submit event name is displayed on calender
  // TODO on submit event is added to database for the group's events
export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  createEvent(event) {
    console.log(this.state);
  };

  render() {
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
              Event Name:
              <input
                type="text"
                name="groupName"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Create Event</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
