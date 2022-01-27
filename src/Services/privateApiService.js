import axios from "axios";

const config = {
  headers: {
    Group: "127",
  },
};

const getSecureHeader = () => {
  const token = localStorage.getItem("token");
  return token
    ? { Authorization: "Bearer " + token }
    : { error: "No token found" };
};

const GetPrivate = async (route, id = null) => {
  try {
    let url;
    id ? (url = route + "/" + id) : (url = route);
    let response = await axios.get(url, config);
    return response;
  } catch (error) {
    return error;
  }
};

export default GetPrivate;
