import axios from "axios";
const { sweetAlertError, sweetAlertSuccess } = require("./sweetAlertServices");

const endPointMembers = process.env.REACT_APP_ENDPOINT_MENBERS;
const config = {
  headers: {
    Group: 127,
  },
};

const getMembers = async () => {
  const response = await axios
    .get(endPointMembers, config)
    .catch((error) => error.message);
  return response;
};

const getMemberById = async (id) => {
  try {
    const response = await axios.get(`${endPointMembers}/${id}`, config);
    return response;
  } catch (error) {
    sweetAlertError("No se pudo cargar el contenido");
  }
};

export const searchMembers = async (search) => {
  try {
    const response = await axios.get(
      `${endPointMembers}?search=${search}`,
      config
    );
    return response;
  } catch (error) {
    return error;
  }
};

// Metodo a utilizar cuando este componente MembersForm
const postMember = async (data) => {
  await axios
    .post(endPointMembers, data, config)
    .then((res) => {
      sweetAlertSuccess(`Miembro ${data.name} creado correctamente`);
    })
    .catch((err) => {
      sweetAlertError("No se pudo crear el miembro");
    });
};

// Metodo a utilizar cuando este componente MembersForm
const putMember = async (id, data) => {
  await axios
    .put(`${endPointMembers}/${id}`, data, config)
    .then((res) => {
      sweetAlertSuccess(`Miembro ${data.name} editado correctamente`);
    })
    .catch((err) => {
      sweetAlertError("No se pudo editar el miembro");
    });
};

const deleteMember = async (id) => {
  await axios
    .delete(`${endPointMembers}/${id}`, config)
    .then(() => sweetAlertSuccess("Se elimino al miembro."))
    .catch(() => sweetAlertError("No se pudo eliminar al miembro."));
};

export { getMembers, getMemberById, postMember, putMember, deleteMember };
