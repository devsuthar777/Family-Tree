import {CREATE_REG_REQ, LOGIN_USER}  from "../constants/userContants";

export const createRegReq = (data) => ({
    type: CREATE_REG_REQ,
    payload: data ? data : "",
  });

export const loginUser = (data) => ({
    type: LOGIN_USER,
    payload: data ? data : "",
  });