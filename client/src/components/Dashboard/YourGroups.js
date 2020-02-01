import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class YourGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      groups: null
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    API.getUser()
      .then(response => {
        if (response.data.user) {
          this.setState({
            user: response.data.user._id
          });
        }
      })
      .then(() => this.populateGroups());
  }

  populateGroups() {
    if (this.state.user) {
      API.getGroupByUser(this.state.user).then(groups => {
        console.log(groups);
        this.setState({
          groups: groups.data
        });
      });
    }
  }

  renderGroups() {
    if (this.state.groups) {
      let groupdivs = this.state.groups.map(g => {
        // console.log(g);
        return (
          <Link
            to="/group"
            key={g.groupName + Date.now()}
            className="imageColumn"
          >
            <img
              className="image"
              src={g.imageUrl}
              alt="activity type"
              width="100%"
            />
            <div className="text-block">
              <h4>{g.groupName}</h4>
            </div>
          </Link>
        );
      });
      return groupdivs;
    }
    return null;
  }

  render() {
    return (
      <>
        <h1>Your Groups</h1>
        <div className="imageRow">
          {this.state.groups ? this.renderGroups() : "You have no groups"}
        </div>
      </>
    );
  }
}

export default YourGroups;
