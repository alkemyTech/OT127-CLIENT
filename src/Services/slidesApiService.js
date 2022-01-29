import axios from 'axios'

export const getSlidesData = async () => {
    try {
        const response = await axios.get('http://ongapi.alkemy.org/api/slides')
        return response
    } catch (error) {
        return error
    }
}

export const getSlidesDataById = () => {

}

export const createNewSlide = () => {

}

export const updateSlide = () => {

}

export const deleteSlide = () => {

} 