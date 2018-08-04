import axios from "axios";
import * as types from "../constant/action_constant";

export function login(userCredentials) {
  return dispatch => {
    dispatch({ type: types.LOG_IN_SUCCESS });
  };
}

export function logout() {
  localStorage.removeItem("user");
  return {
    type: types.LOG_OUT
  };
}

export function clearErrors() {
  return {
    type: types.CLEAR_ERRORS
  };
}
