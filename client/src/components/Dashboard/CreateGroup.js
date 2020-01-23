import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

export class CreateGroup extends Component {
  state = {
    selectedFile: null
  };

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
          <input type="file" onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler}>Upload</button>
          <div className="container">Input group details</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Add Group</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
