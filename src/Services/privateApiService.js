import axios from "axios"

let config = {
  headers: {
<<<<<<< HEAD
    Group: 127, //Aqui va el ID del equipo!!
=======
    Group: "127",
>>>>>>> 7fbe783815868890a8ae26a76a355c201124c7fc
  },
}

<<<<<<< HEAD
const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

const getSecureHeader = () => {
  const token = localStorage.getItem("token")
  return token
    ? { Authorization: "Bearer " + token }
    : { error: "No token found" }
}

export const privateServiceDelete = (route, id) => {
  if (!route) return (alert("Error: debe proporcionar una ruta"))
  if ((!id && id !== 0) || id < 0) return (alert("Error: debe proporcionar un id valido"))

  const url = `${route}/${id}`
  let token = getSecureHeader()
  const { Authorization, error } = token

  if (Authorization) {
    axios.delete(url, {
      header: {
        ...config.headers,
        Authorization,
      }
    })

  } else {
    return error
  }
}

export default Get 
=======
const getSecureHeader = () => {
  const token = localStorage.getItem("token");
  return token
    ? { Authorization: "Bearer " + token }
    : { error: "No token found" };
};

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
>>>>>>> 7fbe783815868890a8ae26a76a355c201124c7fc
