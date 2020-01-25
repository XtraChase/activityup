import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    selectedFile: null
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Group Name: " + this.state.value);
    event.preventDefault();
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    // Firebase Storage
    axios
      .post(
        "https://us-central1-activityup-vote.cloudfunctions.net/uploadFile",
        fd,
        {
          onUploadProgress: progressEvent => {
            console.log(
              "Upload Progress: " +
                Math.round((progressEvent.loaded / progressEvent.total) * 100) +
                "%"
            );
          }
        }
      )
      .then(res => {
        console.log(res);
      });
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
            Add A New Group
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <label>
              Group Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="file" onChange={this.fileSelectedHandler} />
            <button onClick={this.fileUploadHandler}>Upload</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <input
            className="blue"
            type="submit"
            value="Add Group"
            onClick={this.props.onHide}
          />
        </Modal.Footer>
      </Modal>
    );
  }
}
