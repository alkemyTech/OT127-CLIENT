import axios from 'axios'

const url = 'http://ongapi.alkemy.org/api/slides'

const toDataURL = (blob) =>
    // Para convertir los links de imagenes a base64
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });

export const getSlidesData = async () => {
    try {
        const response = await axios.get(url)
        return response
    } catch (error) {
        return error
    }
}

export const getSlidesDataById = async (id) => {
    try {
        const response = await axios.get(`${url}/${id}`)
        return response
    } catch (error) {
        return error
    }
}

export const createNewSlide = async (data) => {
    try {
        // Primero hay que convertir el link de la imagen a base64
        let imgBlob = await axios.get(data.image, { responseType: "blob" })
        let encoded = await toDataURL(imgBlob.data)
        // Guardamos el link ya transformado a base 64 y hacemos la peticion 
        data.image = encoded
        const response = await axios.post(url, data)
        return response
    } catch (error) {
        return error
    }
}

export const updateSlide = async (data, id) => {
    try {
        // Primero hay que convertir el link de la imagen a base64
        let imgBlob = await axios.get(data.image, { responseType: "blob" })
        let encoded = await toDataURL(imgBlob.data)
        // Guardamos el link ya transformado a base 64 y hacemos la peticion 
        data.image = encoded
        const response = await axios.put(`${url}/${id}`, data)
        return response
    } catch (error) {
        return error
    }
}

export const deleteSlide = async (id) => {
    try {
        const response = await axios.delete(`${url}/${id}`)
        return response
    } catch (error) {
        return error
    }
} 