import React, { Component } from "react";
import { Modal } from "react-bootstrap";
// import axios from "axios";

export default class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      image: "",
      type: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    selectedFile: null
  };

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  //submit new group to DB
  handleSubmit(event) {
    alert("Group Name: " + this.state.name);
    console.log(this.state);
    event.preventDefault();
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  // fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
  //   // Firebase Storage
  //   axios
  //     .post(
  //       "https://us-central1-activityup-vote.cloudfunctions.net/uploadFile",
  //       fd,
  //       {
  //         onUploadProgress: progressEvent => {
  //           console.log(
  //             "Upload Progress: " +
  //               Math.round((progressEvent.loaded / progressEvent.total) * 100) +
  //               "%"
  //           );
  //         }
  //       }
  //     )
  //     .then(res => {
  //       console.log(res);
  //     });
  // };

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
        <form onSubmit={this.handleSubmit}>
          <Modal.Body>
              <label>
                Group Name:
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
              <input 
              type="file" 
              // value={this.state.image}
              onChange={this.fileSelectedHandler} />
              {/* <button onClick={this.fileUploadHandler}>Upload</button> */}
            <Modal.Footer>
              <input
                className="blue"
                type="submit"
                value="Add Group"
                onClick={this.props.onHide}
              />
            </Modal.Footer>
          </Modal.Body>
        </form>
      </Modal>
    );
  }
}
