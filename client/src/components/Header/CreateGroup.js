import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: "",
      modo: "",
      category: "",
      about: "",
      imageUrl: "",
      selectedFile: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // state = {
  //   selectedFile: null
  // };

  handleChange(event) {
    this.setState({
      groupName: event.target.groupName,
      modo: event.target.modo,
      category: event.target.category,
      about: event.target.about,
      imageUrl: event.target.imageUrl
    });
  }

  handleSubmit(event) {
    alert(
      "New Group: " +
        this.state.groupName +
        this.state.modo +
        this.state.category +
        this.state.about
    );
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
                value={this.state.groupName}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Modo:
              <input
                type="text"
                value={this.state.modo}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                value={this.state.category}
                onChange={this.handleChange}
              />
            </label>
            <label>
              About:
              <input
                type="text"
                value={this.state.about}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Image Url:
              <input
                type="text"
                value={this.state.imageUrl}
                onChange={this.handleChange}
              />
            </label>
            <label>Or upload and image from your device</label>
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
