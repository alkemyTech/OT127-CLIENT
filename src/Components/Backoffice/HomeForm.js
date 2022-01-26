import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import './HomeForm.scss'
const HomeForm = () => {
    const [slidesData, setSlidesData] = useState([])
    const [welcomeText, setWelcomeText] = useState('')
    const [initialValues, setInitialValues] = useState({
        welcome: '',
        slides: [{
            name: '',
            description: '',
            image: '',
        }],
    })

    const updateSlides = async (slide, id) => {
        try {
            // TO DO: solucionar error: no base64 string provided
            await axios.put(`http://ongapi.alkemy.org/api/slides/${id}`, slide)
        } catch (error) {
            // TO DO
        }
    }

    const toDataURL = (url) => {
        fetch(url)
            .then(response => response.blob())
            .then(
                blob =>
                    new Promise((resolve, reject) =>
                        Object.assign(new FileReader(), {
                            onloadend: ({ target }) => resolve(target.result),
                            onerror: ({ target }) => reject(target.error),
                        }).readAsDataURL(blob),
                    ),
            );
    }

    const updateWelcomeText = async (values) => {
        try {
            // TO DO: solucionar error: no base64 string provided
            await axios.put('http://ongapi.alkemy.org/api/organization/1', { name: welcome_text.name, welcome_text: values.welcome })
        } catch (error) {
            // TO DO
        }
    }

    const updateValues = (values) => {

        //Comparo los slides originales con los que vienen del formulario
        slidesData.forEach((slide) => {
            for (let i = 0; i < values.slides.length; i++) {
                if (slide.id === values.slides[i].id) {
                    if (slide.image !== values.slides[i].image || slide.name !== values.slides[i].name || slide.description !== values.slides[i].description) {
                        // cuando detecta los slides que fueron modificados realizamos la peticion "PUT"
                        // con todos los datos que ya tenia el slides mas el nuevo campo modificado
                        updateSlides(values.slides[i], values.slides[i].id)
                    }
                }
            }
        })
        // Comparo el mensaje que viene del formulario con el original
        if (values.welcome !== welcomeText.welcome_text) {
            // si son diferentes realizamos la peticion "PUT" con todos los datos originales excepto el mensaje modificado
            updateWelcomeText(values)
        }
    }


    useEffect(() => {
        const getDataToEdit = async () => {
            try {
                // Traemos la toda la informacion que podria ser editada
                // solo traemos los 3 primeros slides, de ser necesario traer todos, borrar el "?limit=3"
                const slidesResponse = await axios.get('http://ongapi.alkemy.org/api/slides?limit=3')
                const welcomeResponse = await axios.get('http://ongapi.alkemy.org/api/organization')
                const slides = slidesResponse.data.data
                const welcomeText = welcomeResponse.data.data
                // Guardamos la informacion original aparte, para luego hacer una comparacion
                // con la informacion que venga del formulario y ver que se modifico
                setSlidesData(slides)
                setWelcomeText(welcomeText)

                // guardamos los valores iniciales que va a usar formik
                setInitialValues({
                    welcome: welcomeText.welcome_text,
                    slides: slides
                })

            } catch (error) {
                // TO DO
            }
        }
        getDataToEdit()
    }, [])

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={
                Yup.object().shape({
                    welcome: Yup.string().min(20, 'Debe tener por lo menos 20 caracteres.').required('El campo Texto de Bienvenida es obligatorio'),
                    slides: Yup.array().of(
                        Yup.object().shape({
                            name: Yup.string().required('El campo Titulo es obligatorio').nullable(),
                            description: Yup.string().required('El campo Descripción es obligatorio').nullable(),
                            image: Yup.string().required('El campo URL de la imagen es obligatorio').nullable(),
                        })
                    )
                })
            }
            onSubmit={(values) => {
                updateValues(values)
            }}
        >
            {({
                values,
            }) => (<Form className='form'>
                <p className='form__title'>Formulario de Edición Home</p>
                <p>Modifique los campos que desee editar</p>
                <label htmlFor="welcome">
                    Texto de Bienvenida
                </label>
                <Field name="welcome" className='form__input' />
                <ErrorMessage name="welcome" />
                <p className='form__sliders-title'>Sliders</p>
                <div className='form__sliders'>
                    <FieldArray name="slides">
                        {() => (values.slides.map((slide, i) => {
                            return (
                                <div key={i} className='form__slide'>
                                    <hr className='form__divider' />
                                    <p>ID: {slide.id}</p>
                                    <label>Titulo</label>
                                    <Field
                                        name={`slides.${i}.name`}
                                        className='form__input'
                                    />
                                    <ErrorMessage name={`slides.${i}.name`} component="div" />
                                    <label>Descripción</label >
                                    <Field
                                        name={`slides.${i}.description`}
                                        className='form__input'
                                    />
                                    <ErrorMessage name={`slides.${i}.description`} component="div" />
                                    <label>URL de la imagen</label>
                                    <Field
                                        name={`slides.${i}.image`}
                                        className='form__input'
                                    />
                                    <ErrorMessage name={`slides.${i}.image`} component="div" />
                                </div>
                            )
                        }))}
                    </FieldArray>
                </div>
                <button type='submit' className='form__button'>GUARDAR CAMBIOS</button>
            </Form>)}
        </Formik >
    )
}

export default HomeForm 
