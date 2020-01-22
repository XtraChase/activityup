import axios from "axios";

export default {
  findUser(loginObj) {
    return axios.get(
      `/api/users/one/?username=${loginObj.email}&password=${loginObj.password}`
    );
  },
  logIn(loginObj) {
    return axios.post("api/users/login", loginObj);
  }
};
