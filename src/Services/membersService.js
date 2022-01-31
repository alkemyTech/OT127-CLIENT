import axios from "axios";
import { Get } from "./publicApiService";

const baseURL = "http://ongapi.alkemy.org/api/members";

const getMembers = async (setMembers) => {
  const response = await axios.get(baseURL).catch((error) => error.message);
  setMembers(response.data.data);
};

const getMembersById = async (id) => {
  const response = await Get(baseURL, id);
  return response;
};

const postMember = async (data) => {
  const response = await axios.post(baseURL, data).catch((err) => err.message);
  return response;
};

const putMember = async (id, data) => {
  const response = await axios
    .post(`${baseURL}/${id}`, data)
    .catch((err) => err.message);
  return response;
};

const deleteMember = async (id) => {
  const response = await axios
    .delete(`${baseURL}/${id}`, id)
    .catch((err) => err.message);
  return response;
};

export { getMembers, getMembersById, postMember, putMember, deleteMember };
