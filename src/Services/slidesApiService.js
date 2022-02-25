import axios from "axios";
const { sweetAlertError, sweetAlertSuccess } = require("./sweetAlertServices");

const url = process.env.REACT_APP_ENDPOINT_SLIDES;
const config = {
  headers: {
    Group: 127,
  },
};

const toDataURL = (blob) =>
  // Para convertir los links de imagenes a base64
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

export const getSlidesData = async () => {
  const response = await axios.get(url, config).catch((error) => {
    sweetAlertError("No se pudo cargar todo el contenido");
  });
  return response;
};

export const getSearch = async (search) => {
  try {
    const response = await axios.get(`${url}?search=${search}`, config);
    return response;
  } catch (error) {
    return error;
  }
};

export const getSlidesDataById = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`, config);
    return response;
  } catch (error) {
    sweetAlertError("No se pudo cargar el contenido");
  }
};

export const postSlides = async (data) => {
  await axios
    .post(url, data, config)
    .then((res) => {
      sweetAlertSuccess(`Slides ${data.name} creado correctamente`);
    })
    .catch((err) => {
      sweetAlertError("No se pudo crear el slides");
    });
};

// Metodo a utilizar cuando este componente MembersForm
export const putSlides = async (id, data) => {
  await axios
    .put(`${url}/${id}`, data, config)
    .then((res) => {
      sweetAlertSuccess(`Slide ${data.name} editado correctamente`);
    })
    .catch((err) => {
      sweetAlertError("No se pudo editar el slide");
    });
};

export const createNewSlide = async (data) => {
  try {
    // Primero hay que convertir el link de la imagen a base64
    let imgBlob = await axios.get(data.image, { responseType: "blob" });
    let encoded = await toDataURL(imgBlob.data);
    // Guardamos el link ya transformado a base 64 y hacemos la peticion
    data.image = encoded;
    const response = await axios.post(url, data, config);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateSlide = async (data, id) => {
  try {
    // Primero hay que convertir el link de la imagen a base64
    let imgBlob = await axios.get(data.image, { responseType: "blob" });
    let encoded = await toDataURL(imgBlob.data);
    // Guardamos el link ya transformado a base 64 y hacemos la peticion
    data.image = encoded;
    const response = await axios.put(`${url}/${id}`, data, config);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteSlide = async (id) => {
  if (id) {
    await axios
      .delete(`${url}/${id}`, config)
      .then(() => sweetAlertSuccess("Se elimino el slide."))
      .catch(() => sweetAlertError("No se pudo eliminar el slide."));
  }
};
