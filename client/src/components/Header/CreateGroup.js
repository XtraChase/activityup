import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import API from "../../utils/API";
// import axios from "axios";

export default class CreateGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: "",
      subtitle: "",
      category: "",
      about: "",
      imageUrl: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.createGroup = this.createGroup.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  //submit new group to DB
  createGroup(event) {
    // console.log(this.state);
    event.preventDefault();
    API.createGroup(this.state)
      .then(group => console.log(group))
      .catch(err => console.log(err.response));
    this.setState({
      groupName: "",
      subtitle: "",
      category: "",
      about: "",
      imageUrl: ""
    });
  }

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
        <form onSubmit={this.createGroup}>
          <Modal.Body>
            <label>
              Group Name:*
              <input
                type="text"
                name="groupName"
                value={this.state.groupName}
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
              <label>
                Image Url:*
                <input
                  type="text"
                  name="imageUrl"
                  value={this.state.imageUrl}
                  onChange={this.handleChange}
                  required
                  oninvalid="alert('You must add a group image!');"
                />
              </label>
            </label>
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
