const axios = require("axios");

class ActivitiesService {
  constructor() {
    this.API_URL = process.example.env.REACT_APP_ACTIVITIES_ENDPOINT;
  }

  getAll = async () => {
    let data;
    await axios
      .get(this.API_URL)
      .then((response) => (data = response.data.data))
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
    await axios
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
      await axios
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
      await axios
        .delete(`${this.API_URL}/${id}`)
        .then((response) => response.data)
        .catch((error) => error.message);
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
