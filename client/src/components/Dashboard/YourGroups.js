import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import uuid from "uuid";

class YourGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
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
        // console.log(groups);
        this.setState({
          groups: groups.data
        });
      });
    }
  }

  renderTitle() {
    return (
      <>
        <h1 className="categoryTitle" style={{ marginTop: "15px" }}>
          Your Groups
        </h1>
      </>
    );
  }

  render() {
    const { groups = [] } = this.state;
    return (
      <>
        <div>{groups.length > 1 ? this.renderTitle() : ""}</div>
        <div className="imageRow">
          {groups.map(group => (
            <Link
              to={`/group/${group._id}`}
              key={uuid.v4()}
              className="imageColumn"
            >
              <img
                className="image"
                src={group.imageUrl}
                alt="activity type"
                width="100%"
              />
              <div className="text-block">
                <h4>{group.groupName}</h4>
                <h6>{group.subtitle}</h6>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default YourGroups;
