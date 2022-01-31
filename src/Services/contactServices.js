import axios from "axios";

const API_URL = "http://ongapi.alkemy.org/api/contacts";

export const postContact = (data) => {
  axios.post(API_URL, data).then((res) => console.log(res));
};
