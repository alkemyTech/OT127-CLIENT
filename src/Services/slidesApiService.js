import axios from 'axios'

export const getSlidesData = async () => {
    try {
        const response = await axios.get('http://ongapi.alkemy.org/api/slides')
        return response.data.data
    } catch (error) {
        return error
    }
}

export const getSlidesDataById = async (id) => {
    try {
        const response = await axios.get(`http://ongapi.alkemy.org/api/slides/${id}`)
        return response.data.data
    } catch (error) {
        return error
    }
}

export const createNewSlide = () => {

}

export const updateSlide = () => {

}

export const deleteSlide = () => {

} 