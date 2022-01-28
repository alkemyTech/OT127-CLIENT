import axios from "axios";

const config = {
  headers: {
    Group: 127,
  },
};

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
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
    return error;
  }
};

export default Get;
