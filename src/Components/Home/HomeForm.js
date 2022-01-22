import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const HomeForm = () => {
    const [slidesData, setSlidesData] = useState([])
    const [welcomeText, setWelcomeText] = useState("")

    useEffect(() => {
        const getDataToEdit = async () => {
            try {
                const slidesResponse = await axios.get('http://ongapi.alkemy.org/api/slides')
                const welcomeResponse = await axios.get('http://ongapi.alkemy.org/api/organization')

                const slides = slidesResponse.data.data
                const welcomeText = welcomeResponse.data.data.welcome_text

                setSlidesData(slides);
                setWelcomeText(welcomeText);

            } catch (error) {
                console.error(error)
            }
        }
        getDataToEdit()
    }, [])


    return (
        <Formik
            initialValues={{ welcome: '' }}
            validationSchema={Yup.object({
                welcome: Yup.string().min(20, 'Debe tener por lo menos 20 caracteres.').required('Este campo es obligatorio'),
            })}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form>
                <label htmlFor="welcome">
                    Texto de Bienvenida
                </label>
                <Field name="welcome" />
                <ErrorMessage name="welcome" />
                <button type='submit'>Guardar Cambios</button>
            </Form>
        </Formik>
    )
}

export default HomeForm 
