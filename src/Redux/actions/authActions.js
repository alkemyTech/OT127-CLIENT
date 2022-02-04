//loginUser y RegisterUser deben recibir un objeto como parámetro, con éste formato
// {
//   name: string,
//   email: string,
//   role_id: string,
//   remember_token: string,
//   address: string,
//   profile_image: string,
// }

import { createAction } from "@reduxjs/toolkit";

export const loginUser = createAction("LOGIN_USER");
export const registerUser = createAction("REGISTER_USER");
export const logoutUser = createAction("LOGOUT_USER");
