const axios = require("axios");
const { sweetAlertError, sweetAlertSuccess } = require("./sweetAlertServices");
class ActivitiesService {
  constructor() {
    this.API_URL = process.env.REACT_APP_ACTIVITIES_ENDPOINT;
    this.header = {
      headers: {
        Group: 127,
      },
    };
  }

  getAll = async () => {
    let data;
    await axios
      .get(this.API_URL, this.header)
      .then((response) => (data = response.data.data))
      .catch(() => sweetAlertError("No se pudo cargar las actividades"));
    return data;
  };

  getById = async (id) => {
    let data;
    if (id) {
      await axios
        .get(`${this.API_URL}/${id}`, this.header)
        .then((response) => (data = response.data))
        .catch(() => sweetAlertError("No se pudo cargar la actividad"));
      return data;
    }
  };

  post = async (activity) => {
    await axios
      .post(this.API_URL, activity, this.header)
      .then(() => sweetAlertSuccess("Actividad creada"))
      .catch(() => sweetAlertError("No se pudo crear la actividad"));
  };

  put = async (id, value) => {
    if (id) {
      await axios
        .put(`${this.API_URL}/${id}`, value, this.header)
        .then(() => sweetAlertSuccess("Actividad editada."))
        .catch(() => sweetAlertError("No se pudo editar la actividad"));
    }
  };

  delete = async (id) => {
    if (id) {
      await axios
        .delete(`${this.API_URL}/${id}`, this.header)
        .then(() => sweetAlertSuccess("Se elimino la actividad."))
        .catch(() => sweetAlertError("No se pudo eliminar la actividad."));
    }
  };

  changeImage = async (img) => {
    let encoded;
    await axios
      .get(img, { responseType: "blob" })
      .then((response) => (encoded = response.data))
      .catch((error) => error.message);
    return encoded;
  };
}

const activitiesController = new ActivitiesService();

module.exports = {
  activitiesController,
};
