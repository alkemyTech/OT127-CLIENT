import axios from "axios";

const ENDPOINT_LOGIN = process.env.REACT_APP_ENDPOINT_LOGIN;

export const login = (data) => {
  axios.post(ENDPOINT_LOGIN, data)
  .then(response => {
      localStorage.setItem('token', response.data.data.token)
      window.location.href = '/backoffice'
      return response.data
  })
  .catch(error => error);
};
