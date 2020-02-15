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
  createActivity(activityObj) {
    return axios.post("/api/activities/activities", activityObj);
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
  // FIXME: needs validation check of working route but may not need if activities are filtered on the frontend by date clicked on the calender
  getActivitiesByEvent(id) {
    return axios.get(`/api/activities/byEvent?id=${id}`);
  }
};
