import axios from "axios";

const endPointMenbers = process.env.REACT_APP_ENDPOINT_MENBERS

const getMembers = async () => {
  const response = await axios.get(endPointMenbers).catch((error) => error.message);
  return response;
};

// Metodo a utilizar cuando este componente MembersForm
const postMember = async (data) => {
  await axios.post(endPointMenbers, data).catch((err) => err.message);
};

// Metodo a utilizar cuando este componente MembersForm
const putMember = async (id, data) => {
  await axios.put(`${endPointMenbers}/${id}`, data).catch((err) => err.message);
};

export { getMembers, postMember, putMember };
