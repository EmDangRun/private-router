import axios from "axios";
import * as types from "../constant/action_constant";

export function login() {
  return dispatch => {
    dispatch(startProcessing());
    setTimeout(()=>{
      localStorage.setItem('authenticated', JSON.stringify({authenticated:true}));
      dispatch(finishProcessing());
      dispatch({ type: types.LOG_IN_SUCCESS });
    },3000)
  };
}

export function logout() {
  localStorage.removeItem("authenticated");
  return {
    type: types.LOG_OUT
  };
}

export function clearErrors() {
  return {
    type: types.CLEAR_ERRORS
  };
}

export function startProcessing() {
  return {
    type: types.START_PROCESSING,
  };
}

export function finishProcessing() {
  return {
    type: types.FINISH_PROCESSING,
  };
}