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
  },
  getActivities() {
    return axios.get(`api/activities/activities`);
  },
  putActivity(id) {
    return axios.put(`api/activities/activities`, { id });
  },
  // FIXME needs validation check of working route
  // getEvents() {
  //   return axios.get("api/events");
  // },
  // getEventsByGroup(id) {
  //   return axios.get(`api/events/byGroup?id=${id}`);
  // },
  // createEvent(eventObj) {
  //   return axios.post("api/sessionUser/groups/events", eventObj);
  // },
  // getActivitiesByEvent(id) {
  //   return axios.get(`api/activities/byEvent?id=${id}`);
  // }
  createActivity(activityObj) {
    return axios.post("api/activities/activities", activityObj);
  }
};
