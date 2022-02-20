import axios from "axios";
import { Get } from "./publicApiService";
import { sweetAlertError } from "./sweetAlertServices";

const url = process.env.REACT_APP_ENDPOINTS_NEWS;
const urlSearch = "http://ongapi.alkemy.org/api/news?search="; //!REVISAR ESTO EN VARIABLES DE ENTORNO

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

export const getFilteredNews = async (value) => {
  try {
    let filteredNews = await Get(urlSearch + value, null);
    return filteredNews.data.data;
  } catch (error) {
    if (error.response.status === 500) {
      sweetAlertError("Ha ocurrido un problema en el servidor!");
    } else {
      sweetAlertError("Ha ocurrido un problema!");
    }
  }
};
