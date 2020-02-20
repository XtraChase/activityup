import axios from "axios";

export default {
  logIn(loginObj) {
    return axios.post("/api/users/login", loginObj);
  },
  logOut() {
    return axios.get("/api/users/logout");
  },
  register(registerObj) {
    return axios.post("/api/users/register", registerObj);
  },
  getUser() {
    return axios.get("/api/users/sessionUser");
  },
  getGroups() {
    return axios.get(`/api/groups`);
  },
  getGroupByUser(id) {
    return axios.get(`/api/groups/byUser?id=${id}`);
  },
  createGroup(groupObj) {
    return axios.post("/api/groups", groupObj);
  },
  getActivities() {
    return axios.get(`/api/activities/activities`);
  },
  putActivity(id) {
    return axios.put(`/api/activities/activities`, { id });
  },
  getAdvertisedEvents() {
    return axios.get(`/api/thirdparty/tmevents`);
  },
  getGeekEvents() {
    return axios.get("/api/thirdparty/geekevents");
  },
  createEvent(eventObj) {
    return axios.post("/api/events/sessionUser/events", eventObj);
  },
  getEvents() {
    return axios.get("/api/events/sessionUser/events");
  },
  getEventsByGroup(id) {
    return axios.get(`/api/events/byGroup?id=${id}`);
  },
  // FIXME
  createActivity(activityObj) {
    return axios.post("/api/activities/activities", activityObj);
  },
  getActivitiesByEvent(id) {
    return axios.get(`/api/activities/byEvent?id=${id}`);
  }
};
