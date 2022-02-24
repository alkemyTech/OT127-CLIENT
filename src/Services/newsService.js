import axios from "axios";
import { Get } from "./publicApiService";
import { sweetAlertError, sweetAlertSuccess } from "./sweetAlertServices";

const url = process.env.REACT_APP_ENDPOINTS_NEWS;
const urlSearch = "http://ongapi.alkemy.org/api/news?search=";
const config = {
  headers: {
    Group: 127,
  },
}

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

export const getSearchByCategory = ({ value, select }) => {
  return value !== ""
    ? axios.get(
        `http://ongapi.alkemy.org/api/news?search=${value}&category=${select}`, config
      )
    : axios.get(`http://ongapi.alkemy.org/api/news?category=${select}`, config);
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

export const deleteNews = async (id) => {
  if (id) {
    await axios
      .delete(`${url}/${id}`, config)
      .then(() => sweetAlertSuccess("Se eliminó la novedad."))
      .catch(() => sweetAlertError("No se pudo eliminar la novedad."));
  }
};

