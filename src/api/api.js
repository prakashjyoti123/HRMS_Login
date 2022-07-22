import axios from "axios";

export default {
  registerUser: function (userData) {
    return axios.post("/api/user/register", userData);
  },
  loginUser: function (userData) {
    return axios.post(
      "https://heliverse-hrms-tool-backend.herokuapp.com/employee/login",
      userData
    );
  },
};
