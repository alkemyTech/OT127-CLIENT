import axios from "axios";

const config = {
  headers: {
    Group: "127",
  },
};

export const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const getSecureHeader = () => {
  const token = localStorage.getItem("token");
  return token
    ? { Authorization: "Bearer " + token }
    : { error: "No token found" };
};

//metodo post tarjeta 70
export const privateServicePatch = (route, id, data) => {
  let url = id ? `${route}/${id}` : route;
  let token = getSecureHeader();
  const { Authorization, error } = token;

  if (Authorization) {
    axios.post(url, data, {
      header: {
        ...config.headers,
        Authorization,
      },
    }); // TODO: Controlar errores
  }
};

export const Put = (url, data) => {
  axios
    .put(url, data, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getPrivate = async (route, id = null) => {
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
