const axios = require("axios");
const { sweetAlertError, sweetAlertSuccess } = require("./sweetAlertServices");
class ActivitiesService {
  constructor() {
    this.API_URL = process.env.REACT_APP_ACTIVITIES_ENDPOINT;
  }

  getAll = async () => {
    let data;
    await axios
      .get(this.API_URL, {
        headers: {
          Accept: "application/json, text/plain, */*",
          Group: 127,
        },
      })
      .then((response) => (data = response.data.data))
      .catch(() => sweetAlertError("No se pudo cargar las actividades"));
    return data;
  };

  getById = async (id) => {
    let data;
    if (id) {
      await axios
        .get(`${this.API_URL}/${id}`, {
          headers: {
            Accept: "application/json, text/plain, */*",
            Group: 127,
          },
        })
        .then((response) => (data = response.data.data))
        .catch(() => sweetAlertError("No se pudo cargar la actividad"));
      return data;
    }
  };

  post = async (name, description, image) => {
    await axios
      .post(
        this.API_URL,{
              name,
              description,
              image,
          },
          {
            headers: {
              Group: 127,
            },
          },
      )
      .then(() => sweetAlertSuccess("Actividad creada"))
      .catch(() => sweetAlertError("No se pudo crear la actividad"));
  };

  put = async (id, name, description, image) => {
    if (id) {
      await axios
        .put(
          `${this.API_URL}/${id}`,
          {
            name,
            description,
            image,
          },
          {
            headers: {
              Group: 127,
            },
          },
        )
        .then(() => sweetAlertSuccess("Actividad editada."))
        .catch(() => sweetAlertError("No se pudo editar la actividad"));
    }
  };

  delete = async (id) => {
    if (id) {
      await axios
        .delete(`${this.API_URL}/${id}`, {
          headers: {
            Accept: "application/json, text/plain, */*",
            Group: 127,
          },
        })
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
