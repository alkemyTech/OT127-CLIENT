import axios from "axios";
import { Get } from "./publicApiService";
import { sweetAlertError } from "./sweetAlertServices";

const url = process.env.REACT_APP_ENDPOINTS_NEWS;

export const getNews = async (setMethod) => {
  try {
    let newsFromAPI = await Get(url, null);
    let data = newsFromAPI.data.data;
    setMethod(data);
  } catch (error) {
    if (error.response.status === 500) {
      sweetAlertError("Ha ocurrido un problema en el servidor!");
    } else {
      sweetAlertError("Ha ocurrido un problema!");
    }
  }
};

export const getSearch = (value, category) => {
  return axios.get(`http://ongapi.alkemy.org/api/news?search=${value}`);
};
