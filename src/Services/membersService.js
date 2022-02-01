import axios from "axios";

const baseURL = "http://ongapi.alkemy.org/api/members";

const getMembers = async (setMembers) => {
  const response = await axios.get(baseURL).catch((error) => error.message);
  setMembers(response.data.data);
};

// Metodo a utilizar cuando este componente MembersForm
const postMember = async (data) => {
  await axios.post(baseURL, data).catch((err) => err.message);
};

// Metodo a utilizar cuando este componente MembersForm
const putMember = async (id, data) => {
  await axios.put(`${baseURL}/${id}`, data).catch((err) => err.message);
};

export { getMembers, postMember, putMember };
