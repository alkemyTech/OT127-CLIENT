import { createAction } from "@reduxjs/toolkit";

export const loginUser = createAction("LOGIN_USER");
export const registerUser = createAction("REGISTER_USER");
export const logoutUser = createAction("LOGOUT_USER");
export const setToken = createAction("SET_TOKEN");
