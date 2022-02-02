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

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER": // Éstas strings en un futuro se pueden sacar de un archivo de constantes.
      return {
        // Si la accion es LOGIN_USER, userIsLogged pasa a ser true y se cargan los datos del usuario
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
        // Si la accion es REGISTER_USER, se cargan los datos del usuario pero no se loguea a ningún usuario
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
        // Si la accion es LOGOUT_USER, los campos se vacían
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
