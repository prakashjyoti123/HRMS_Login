import axios from "axios";

export default {
  loginUser: function (userData) {
    return axios.post("/employee/login", userData);
  },
  // requestLoggedUser: function () {
  //   return axios.get("/auth");
  // },
};
