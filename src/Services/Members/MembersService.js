import axios from "axios";
import { Get } from "../publicApiService";

const baseURL = "http://ongapi.alkemy.org/api";

const GetMembers = async () => {
  const response = await Get(baseURL);
  return response;
};

const GetMembersById = async (id) => {
  const response = await Get(baseURL, id);
  return response;
};

const PostMember = async (data) => {
  const response = await axios.post(baseURL, data).catch((err) => err.message);
  return response;
};

const PutMember = async (id, data) => {
  const response = await axios
    .post(`${baseURL}/${id}`, data)
    .catch((err) => err.message);
  return response;
};

const DeleteMember = async (id) => {
  const response = await axios
    .delete(`${baseURL}/${id}`, id)
    .catch((err) => err.message);
  return response;
};

export { GetMembers, GetMembersById, PostMember, PutMember, DeleteMember };
