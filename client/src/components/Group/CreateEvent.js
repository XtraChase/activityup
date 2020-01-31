import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

// EVENT CREATION FOR GROUPS
export class CreateEvent extends Component {
  state = {
    selectedFile: null
  };

  // TODO When a day is clicked on the groups calender a modal pops up | SEE ./Calender.js for handleclick()
  // TODO on submit event name is displayed on calender
  // TODO on submit event is added to database for the group's events
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
        <Modal.Body>
          <input type="file" onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler}>Upload</button>
          <div className="container">Input event details</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Create Event</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
