import axios from "axios";

const ENDPOINT_CONTACT = process.env.REACT_APP_ENDPOINT_CONTACTS;

export const postContact = (data) => {
  axios.post(ENDPOINT_CONTACT, data); //TODO: majear error en un catch
};
