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

    const toDataURL = (blob) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });

    const updateSlides = (slide, id) => {
        // Primero tenemos que pasar la URL de la imagen a un string base64
        axios
            .get(slide.image, { responseType: "blob" })
            .then((response) => toDataURL(response.data))
            .then((encoded) => {
                slide.image = encoded
                axios.put(`http://ongapi.alkemy.org/api/slides/${id}`, slide)
            });
    }


    const updateWelcomeText = async (values) => {
        try {
            await axios.put('http://ongapi.alkemy.org/api/organization/1', { name: welcomeText.name, welcome_text: values.welcome })
        } catch (error) {
            // TO DO
        }
    }

    const compareValues = (values) => {

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

    const getDataToEdit = async () => {
        try {
            // Traemos la toda la informacion que podria ser editada
            const slidesResponse = await axios.get('http://ongapi.alkemy.org/api/slides')
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

    useEffect(() => {
        getDataToEdit()
    }, [])

    return (
        <div className="HomeForm">
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
                    compareValues(values)
                }}
            >
                {({
                    values,
                }) => (<Form className='form'>
                    <p className='form__title'>Formulario de Edición Home</p>
                    <p className='form__subtitle'>Modifique los campos que desee editar</p>
                    <label htmlFor="welcome" className="form__label">
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
                                        <p className="form__label">ID: {slide.id}</p>
                                        <label className="form__label">Titulo</label>
                                        <Field
                                            name={`slides.${i}.name`}
                                            className='form__input'
                                        />
                                        <ErrorMessage name={`slides.${i}.name`} component="div" />
                                        <label className="form__label">Descripción</label >
                                        <Field
                                            name={`slides.${i}.description`}
                                            className='form__input'
                                        />
                                        <ErrorMessage name={`slides.${i}.description`} component="div" />
                                        <label className="form__label">URL de la imagen</label>
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
                    <button type='submit' className='form__button button'>GUARDAR CAMBIOS</button>
                </Form>)}
            </Formik >
        </div>
    )
}

export default HomeForm 
