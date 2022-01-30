import axios from "axios";

let config = {
  headers: {
    Group: 127,
  },
};

const getSecureHeader = () => {
  const token = localStorage.getItem("token");
  return token
    ? { Authorization: "Bearer " + token }
    : { error: "No token found" };
};

export const privateServicePatch = (route, id, data) => {
  let url = id ? `${route}/${id}` : route;
  let token = getSecureHeader();
  const { Authorization, error } = token;

  if (Authorization) {
    axios.patch(url, data, {
      header: {
        ...config.headers,
        Authorization,
      },
    }); // TODO: Controlar errores
  } else {
      
const getPrivate = async (route, id = null) => {
  try {
    let url;
    id ? (url = route + "/" + id) : (url = route);
    let token = getSecureHeader();
    if (token.Authorization) {
      config = {
        headers: {
          ...config.headers,
          Authorization: token.Authorization,
        },
      };
    } else {
      return token.error;
    }
    let response = await axios.get(url, config);
    return response;
  } catch (error) {
    return error;
  }
};

export default getPrivate;
