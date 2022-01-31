import axios from "axios";

<<<<<<< HEAD
let config = {
  headers: {
    Group: 127,
  },
=======
const config = {
	headers: {
		Group: "127", 
	},
>>>>>>> 1ca2a9788b17199aa7ae5f3ddb9cc1887c198a01
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

<<<<<<< HEAD
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
=======
export const Put = () => {
	axios
		.put(url, data, config)
		.then((res) => {
			return res
		})
		.catch((err) => {
			return err
		});
}


export const getPrivate = async (route, id = null) => {
>>>>>>> 1ca2a9788b17199aa7ae5f3ddb9cc1887c198a01
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


