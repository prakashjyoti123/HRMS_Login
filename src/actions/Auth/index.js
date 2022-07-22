import { LOGIN_USER, LOGOUT_USER, SET_CURRENT_USER } from "./actionTypes";
// GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE,

// export const getList = () => ({
//   type: GET_LIST,
// });

// export const getListSuccess = (data) => ({
//   type: GET_LIST_SUCCESS,
//   payload: data,
// });

// export const getListFailure = () => ({
//   type: GET_LIST_FAILURE,
// });
// my code

export const loginUser = (userData) => ({
  type: LOGIN_USER,
  userData,
});

export const logOutUser = () => ({
  type: LOGOUT_USER,
});

export const setCurrentUser = (json) => ({
  type: SET_CURRENT_USER,
  json,
});
