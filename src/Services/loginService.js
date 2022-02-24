import axios from "axios";

const ENDPOINT_LOGIN = process.env.REACT_APP_ENDPOINT_LOGIN;

export const login = (data) => {
  axios.post(ENDPOINT_LOGIN, data, {
    headers: {
      Group: 127,
    },
  })
  .then(response => {
      localStorage.setItem('token', JSON.stringify(response.data.data))
      window.location.href = '/backoffice/organization'
      return response.data
  })
  .catch(error => error);
};
