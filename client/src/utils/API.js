import axios from "axios";

export default {
  logIn(loginObj) {
    return axios.post("api/users/login", loginObj);
  },
  logOut() {
    return axios.get("api/users/logout");
  },
  register(registerObj) {
    return axios.post("api/users/register", registerObj);
  },
  getUser() {
    return axios.get("api/users/sessionUser");
  },
  getGroupByUser(id) {
    return axios.get(`api/groups/byUser?id=${id}`);
  },
  createGroup(groupObj) {
    return axios.post("api/groups/sessionUser/groups", groupObj);
  }
  // NEED VALIDATION
  // getEvents() {
  //   return axios.get("api/events");
  // },
  // getEventsByGroup(id) {
  //   return axios.get(`api/events/byGroup?id=${id}`);
  // },
  // createEvent(eventObj) {
  //   return axios.post("api/sessionUser/groups/events", eventObj);
  // },
  // getActivitiesByGroup(id) {
  //   return axios.get(`api/activities/byGroup?id=${id}`);
  // },
  // createActivity(activityObj) {
  //   return axios.post("api/event/activities", activityObj);
  // }
};
