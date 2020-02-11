import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class GroupRecommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.populateGroups();
    this.getUser();
  }

  populateGroups() {
    API.getGroups().then(groups => {
      console.log(groups);
      this.setState({
        groups: groups.data
      });
    });
  }

  userGroups() {
    if (this.state.user) {
      API.getGroupByUser(this.state.user).then(groups => {
        console.log(groups);
        this.setState({
          userGroups: groups.data
        });
      });
    }
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
      .then(() => this.userGroups());
  }

  renderTitle() {
    return (
      <>
        <h1 className="categoryTitle" style={{ marginTop: "15px" }}>
          Recommended Groups
        </h1>
      </>
    );
  }

  render() {
    const { groups = [], userGroups = [] } = this.state;

    // Get the id of the group from the groups array
    const getGroup = group => group._id;

    // Filter the group based on id
    const filterGroup = group => userGroups._id === getGroup(group);

    // If selected group array has objects filter them else show all groups
    const filteredGroups =
      userGroups && userGroups.length ? groups.filter(filterGroup) : groups;

    return (
      <>
        <div>{groups && groups.length ? this.renderTitle() : ""}</div>
        <div className="imageRow">
          {filteredGroups.map(group => (
            <Link
              to={`/group/${group._id}`}
              key={group.groupName + Date.now()}
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

export default GroupRecommendations;
