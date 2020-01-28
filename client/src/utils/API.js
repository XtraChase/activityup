import axios from "axios";

export default {
  logIn(loginObj) {
    return axios.post("api/users/login", loginObj);
  },
  logOut() {
    return axios.get("api/users/logout");
  },
  register(registerObj) {
    return axios.post("api/users/register", registerObj)
  },
  getUser() {
    return axios.get("api/users/sessionUser")
  },
  getGroupByUser(id) {
    return axios.get(`api/groups/byUser?id=${id}`)
  }
};
