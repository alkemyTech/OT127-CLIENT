const axios = require("axios");

class ActivitiesService {
  constructor() {
    this.API_URL = "http://ongapi.alkemy.org/api/activities";
  }

  getAll = async () => {
    let data;
    await axios
      .get(this.API_URL)
      .then((response) => response.data.data)
      .catch((error) => error.message);
    return data;
  };

  getById = async (id) => {
    let data;
    if (id) {
      await axios
        .get(`${this.API_URL}/${id}`)
        .then((response) => (data = response.data.data))
        .catch((error) => error.message);
      return data;
    }
  };

  post = async (name, description, image) => {
    axios
      .post(this.API_URL, {
        name,
        description,
        image,
      })
      .then((response) => response.data)
      .catch((error) => error.message);
  };

  put = async (id, name, description, image) => {
    if (id) {
      axios
        .put(`${this.API_URL}/${id}`, {
          name,
          description,
          image,
        })
        .then((response) => response.data)
        .catch((error) => error.message);
    }
  };

  delete = async (id) => {
    if (id) {
      axios
        .delete(`${this.API_URL}/${id}`)
        .then((response) => response.data)
        .catch((error) => error.message);
    }
  };
}

const activitiesController = new ActivitiesService();

module.exports = {
  activitiesController,
};
