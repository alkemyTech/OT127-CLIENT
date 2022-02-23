import axios from "axios";

let config = {
    headers: {
        // Group: "127",
        group_id: 127
    },
};
export const getSecureHeader = () => {
    const token = localStorage.getItem("token");
    return token
        ? { Authorization: "Bearer " + token }
        : { error: "No token found" };
};
export const Put = async (route, data, id) => {
    //README:
    //Ingresar la url completa
    //Pasar objeto como argum para enviarlo en el body
    let url = id ? `${route}/${id}` : route;
    await axios
        .put(url, data, {
            headers: getSecureHeader(),
        })
        .then(res => res)
        .catch(err => alert(err));
};
export const Delete = async (route, id) => {
    //README:
    //Ingresar la url completa  
    let url = id ? `${route}/${id}` : route;
    await axios
        .delete(url, {
            headers: getSecureHeader(),
        })
        .then(res => res)
        .catch(err => alert(err));
};
export const Post = async (url, body) => {
    //README:
    //Ingresar la url completa  
    //Pasar objeto como argum para enviarlo en el body
    await axios
        .post(url, body, {
            headers: getSecureHeader(),
        })
        .then(res => res)
        .catch(err => alert(err));
};
export const Get = async (route, id) => {
    //README:
    //Ingresar la url completa
    let url = id ? `${route}/${id}` : route;
    return await axios
        .get(url)
        .catch(err => alert(err))
};
export const toDataURL = (blob) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });

export const updateSlides = (slide) => {
    // Primero tenemos que pasar la URL de la imagen a un string base64
    axios.get(slide.image, { responseType: "blob" })
        .then((response) => toDataURL(response.data))
        .then((encoded) => {
            slide.image = encoded
            axios.put(`${process.env.REACT_APP_ENDPOINT_SLIDES}/${slide.id}`, slide)
        });
}