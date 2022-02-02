//loginUser y RegisterUser deben recibir un objeto como parámetro, con éste formato
// {
//   name: string,
//   email: string,
//   role_id: string,
//   remember_token: string,
//   address: string,
//   profile_image: string,
// }

export const loginUser = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user,
  };
};
export const registerUser = (user) => {
  return {
    type: "REGISTER_USER",
    payload: user,
  };
};
export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
