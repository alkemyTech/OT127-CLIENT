import axios  from 'axios'

const baseUrl = 'http://ongapi.alkemy.org/docs';

export async function SaveProduct (productData) {
    try {
        const response = await axios({
            url: 'baseUrl',
            method: 'POST',
            data: productData,
        })

        return response
    } catch (e){
        console.log(e)
    }
}