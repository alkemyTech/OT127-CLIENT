import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const ENDPOINT_CONTACT = process.env.REACT_APP_ENDPOINT_CONTACTS;

export const postContact = (data) => {
  axios.post(API_URL + ENDPOINT_CONTACT, data); //TODO: majear error en un catch
};