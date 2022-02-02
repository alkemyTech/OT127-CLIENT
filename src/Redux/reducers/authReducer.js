const initialState = {
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

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER": // Éstas strings en un futuro se pueden sacar de un archivo de constantes.
      return {
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
    case "REGISTER_USER":
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
    case "LOGOUT_USER":
      return {
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
    default:
      return state;
  }
};
