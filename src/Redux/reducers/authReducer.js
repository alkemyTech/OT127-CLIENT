import { createReducer } from "@reduxjs/toolkit";
import { loginUser, registerUser, logoutUser } from "../actions/authActions";

const initialState = {
  userIsLogged: false,
  userData: {
    name: "",
    email: "",
    role_id: "",
    remember_token: "", //TOKEN OBTENIDO DE LA API
    address: "",
    profile_image: "",
  },
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginUser, (state, action) => {
      return {
        ...state,
        userIsLogged: true,
        userData: {
          name: action.payload.name,
          email: action.payload.email,
          role_id: action.payload.role_id,
          remember_token: action.payload.remember_token,
          address: action.payload.address,
          profile_image: action.payload.profile_image,
        },
      };
    })
    .addCase(registerUser, (state, action) => {
      return {
        ...state,
        userData: {
          name: action.payload.name,
          email: action.payload.email,
          role_id: action.payload.role_id,
          remember_token: action.payload.remember_token,
          address: action.payload.address,
          profile_image: action.payload.profile_image,
        },
      };
    })
    .addCase(logoutUser, (state) => {
      return {
        ...state,
        userIsLogged: false,
        userData: {
          name: "",
          email: "",
          role_id: "",
          remember_token: "",
          address: "",
          profile_image: "",
        },
      };
    })
    .addDefaultCase((state) => {
      return state;
    });
});
