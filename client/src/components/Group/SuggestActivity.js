import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import API from "../../utils/API";

// SUGGEST ACTIVITIES FOR EVENTS

// TODO on submit activity is pushed to database
export default class SuggestActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activityName: "",
      subtitle: "",
      image: ""
      // category: "",
      // groupResponsible: "",
      // hostingEvent: "",
      // upvotes: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.createActivity = this.createActivity.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  suggestActivity(event) {
    console.log(this.state);
  }

  // FIXME preventDefault not working
  // TODO render to page without page refresh
  createActivity(event) {
    event.preventDefault();
    API.createActivity(this.state)
      .then(activity => console.log(activity))
      .catch(err => console.log("error", err.response));
    this.setState({
      activityName: "",
      subtitle: "",
      image: "",
      // category: "",
      // groupResponsible: "",
      // hostingEvent: "",
      upvotes: 0
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
            Suggest an activity
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={this.createActivity}>
          <Modal.Body>
            <label>
              Activity Name:
              <input
                type="text"
                name="activityName"
                value={this.state.activityName}
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
              Image URL:
              <input
                type="text"
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </label>
          </Modal.Body>
          <Modal.Footer>
            <input
              className="blue"
              type="submit"
              value="Add Activity"
              onClick={this.props.onHide}
            />
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
