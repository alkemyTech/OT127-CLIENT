import axios from "axios";

const baseURL = "http://ongapi.alkemy.org/api/members";

const getMembers = async (setMembers) => {
  const response = await axios.get(baseURL).catch((error) => error.message);
  setMembers(response.data.data);
};

const postMember = async (data) => {
  await axios.post(baseURL, data).catch((err) => err.message);
};

const putMember = async (id, data) => {
  await axios.post(`${baseURL}/${id}`, data).catch((err) => err.message);
};

export { getMembers, postMember, putMember };
