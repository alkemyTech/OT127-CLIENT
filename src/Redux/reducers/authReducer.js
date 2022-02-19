import { createReducer } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  logoutUser,
  setToken,
} from "../actions/authActions";

const initialState = {
  userIsLogged: false,
  userData: {
    name: "",
    lastName: "",
    email: "",
    password: "",
  },
  authToken: "",
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginUser, (state, action) => {
      return {
        ...state,
        userIsLogged: true,
        userData: {
          name: action.payload.name,
          lastName: action.payload.lastName,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    })
    .addCase(registerUser, (state, action) => {
      return {
        ...state,
        userData: {
          name: action.payload.name,
          lastName: action.payload.lastName,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    })
    .addCase(logoutUser, (state) => {
      return {
        ...state,
        userIsLogged: false,
        userData: {
          name: "",
          lastName: "",
          email: "",
          password: "",
        },
        authToken: "",
      };
    })
    .addCase(setToken, (state, action) => {
      return {
        ...state,
        authToken: action.payload.token,
      };
    })
    .addDefaultCase((state) => {
      return state;
    });
});
export default authReducer;
