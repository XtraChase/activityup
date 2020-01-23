import axios from "axios";

export default {
  logIn(loginObj) {
    return axios.post("api/users/login", loginObj);
  },
  register(registerObj) {
    return axios.post("api/users/register", registerObj)
  }
};
