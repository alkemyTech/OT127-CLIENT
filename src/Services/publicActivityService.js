const axios = require("axios");

class ActivitiesService {
  constructor() {
    this.API_URL = "http://ongapi.alkemy.org/api/activities";
  }

  getAll = async () => {
    await axios.get(this.API_URL).then((response) => response.data);
  };

  getById = async (id) => {
    if (id) {
      await axios
        .get(`${this.API_URL}/${id}`)
        .then((response) => response.data);
    }
  };

  post = async (name, description, image) => {
    axios
      .post(this.API_URL, {
        name,
        description,
        image,
      })
      .then((response) => response.data);
  };

  put = async (id, name, description, image) => {
    if (id) {
      axios
        .put(`${this.API_URL}/${id}`, {
          name,
          description,
          image,
        })
        .then((response) => response.data);
    }
  };
}

const activitiesController = new ActivitiesService();

module.exports = {
  activitiesController,
};
