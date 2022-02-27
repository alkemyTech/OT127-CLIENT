import axios from "axios";
import { Get } from "./publicApiService";
import { sweetAlertError, sweetAlertSuccess } from "./sweetAlertServices";

const url = process.env.REACT_APP_ENDPOINTS_NEWS;
const URL_NEWS = process.env.REACT_APP_ENDPOINTS_NEWS;

const urlSearch = "http://ongapi.alkemy.org/api/news?search=";
const config = {
  headers: {
    Group: 127,
  },
};

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

export const getNewsByID = (id) => {
  return axios.get(`${URL_NEWS}/${id}`);
};

export const getSearchByCategory = ({ value, select }) => {
  return value !== ""
    ? axios.get(
        `http://ongapi.alkemy.org/api/news?search=${value}&category=${select}`,
        config
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

export const postNews = (data) => {
  axios
    .post(URL_NEWS, data, config)
    .then((res) => {
      sweetAlertSuccess("Se creó con éxito.");
    })
    .catch((err) => {
      sweetAlertError("No se pudo crear esta novedad.");
    });
};

export const putNews = (id, data) => {
  axios
    .put(`${URL_NEWS}/${id}`, data, config)
    .then((res) => {
      sweetAlertSuccess("Se actualizó con éxito");
    })
    .catch((err) => {
      sweetAlertError("No se pudo actualizar esta novedad.");
    });
};

export const deleteNews = async (id) => {
  if (id) {
    await axios
      .delete(`${url}/${id}`, config)
      .then(() => sweetAlertSuccess("Se eliminó la novedad."))
      .catch(() => sweetAlertError("No se pudo eliminar la novedad."));
  }
};
