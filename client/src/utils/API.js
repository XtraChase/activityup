import axios from "axios";

export default {
    findUser(loginObj) {
        return axios.get(`/api/users/one/?username=${loginObj.email}&password=${loginObj.password}`)
    }
}