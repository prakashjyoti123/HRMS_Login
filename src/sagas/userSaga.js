// my code

import { put, takeLatest } from "redux-saga/effects";
import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";
import API from "../api/api";

function* loginUser(userData) {
  try {
    const json = yield API.loginUser(userData.userData);
    // .then((res) => {
    console.log(json);
    yield put({
      type: "SET_CURRENT_USER",
      json: json.data,
    });
    //     })
    //     .catch((err) => {
    //       throw err.response.data;
    //     });
    //  .
  } catch (error) {
    yield put({
      type: "SET_CURRENT_USER_FAILED",
      error,
    });
  }
}
// // today code
// function* handleLoggedUser() {
//   try {
//     const json = yield API.handleLoggedUser(userData.userData);
//     // .then((res) => {
//     console.log(json);
//     yield put({
//       type: "SET_HANDLE_LOGGED_USER",
//       json: json.data,
//     });
//     //     })
//     //     .catch((err) => {
//     //       throw err.response.data;
//     //     });
//     //  .
//   } catch (error) {
//     yield put({
//       type: "SET_CURRENT_USER_FAILED",
//       error,
//     });
//   }

// }

// today code
function* logOutUser(userData) {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  yield put({
    type: "SET_CURRENT_USER",
    json: {},
  });
}

export default function* actionLoginUser() {
  yield takeLatest("LOGIN_USER", loginUser);
  yield takeLatest("LOGOUT_USER", logOutUser);
}
