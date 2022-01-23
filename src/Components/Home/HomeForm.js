import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const HomeForm = () => {
    const [slidesData, setSlidesData] = useState([])
    const [welcomeText, setWelcomeText] = useState('')

    useEffect(() => {
        const getDataToEdit = async () => {
            try {
                const slidesResponse = await axios.get('http://ongapi.alkemy.org/api/slides')
                const welcomeResponse = await axios.get('http://ongapi.alkemy.org/api/organization')

                const slides = slidesResponse.data.data
                const welcomeText = welcomeResponse.data.data.welcome_text
                console.log(welcomeResponse);
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
            enableReinitialize={true}
            initialValues={{
                welcome: welcomeText,
            }}
            validationSchema={Yup.object({
                welcome: Yup.string().min(20, 'Debe tener por lo menos 20 caracteres.').required('Este campo es obligatorio'),
            })}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form className='form'>
                <p className='form__title'>Formulario de Edición Home</p>
                <label htmlFor="welcome">
                    Texto de Bienvenida
                </label>
                <Field name="welcome" className='form__input' />
                <ErrorMessage name="welcome" />
                <b>Sliders</b>
                <hr />
                <div className='form__sliders'>
                    {slidesData.map((slide) => (
                        <div className='form__slide'>
                            <p>ID: {slide.id}</p>
                            <p>Titulo</p>
                            <Field name={`${slide.id}_title`} className='form__input' />
                            <p>Descripción</p>
                            <Field name={`${slide.id}_title`} className='form__input' />
                            <p>URL de la imagen</p>
                            <Field name={`${slide.id}_title`} className='form__input' />
                        </div>
                    ))}
                </div>
                <button type='submit' className='form__button'>Guardar Cambios</button>
            </Form>
        </Formik>
    )
}

export default HomeForm 
