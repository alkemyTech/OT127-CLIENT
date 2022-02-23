import axios from "axios";

const endPointMembers = process.env.REACT_APP_ENDPOINT_MENBERS

const getMembers = async () => {
  const response = await axios.get(endPointMembers).catch((error) => error.message);
  return response;
};

export const searchMembers = async (search) => {
  try {
    const response = await axios.get(`${endPointMembers}?search=${search}`);
    return response;
  } catch (error) {
    return error;
  }
};

// Metodo a utilizar cuando este componente MembersForm
const postMember = async (data) => {
  await axios.post(endPointMembers, data).catch((err) => err.message);
};

// Metodo a utilizar cuando este componente MembersForm
const putMember = async (id, data) => {
  await axios.put(`${endPointMembers}/${id}`, data).catch((err) => err.message);
};

export { getMembers, postMember, putMember };
