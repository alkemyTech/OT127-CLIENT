import axios from "axios";

export let config = {
  headers: {
    Accept: "application/json, text/plain, */*",
    Group: 127,
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

export const privateServicePatch = (route, id, data) => {
  let url = id ? `${route}/${id}` : route;
  let token = getSecureHeader();
  const { Authorization } = token;

  if (Authorization) {
    axios.patch(url, data, {
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

export const privateDelete = (route, id) => {
  const url = `${route}/${id}`;
  let token = getSecureHeader();
  const { Authorization, error } = token;

  if (Authorization) {
    axios.delete(url, {
      header: {
        ...config.headers,
        Authorization,
      },
    });
  } else {
    return error;
  }
};

export const privatePost = (route, data) => {
  let url = route;
  let token = getSecureHeader();
  const { Authorization } = token;

  if (Authorization) {
    axios
      .post(url, data, config)
      .then((res) => res)
      .catch((err) => err);
  }
};
