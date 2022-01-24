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

    const updateValues = (values) => {
        console.log(values.slides);

        let editedSlides = []

        slidesData.forEach((slide) => {
            for (let i = 0; i < values.slides.length; i++) {
                if (slide.id === values.slides[i].id) {
                    if (slide.image !== values.slides[i].image || slide.name !== values.slides[i].name || slide.description !== values.slides[i].description) {
                        console.log("el Slide ID fue editado" + values.slides[i].id)
                    }
                }
            }
        })

        console.log(editedSlides)
        console.log("Algo");

        if (values.welcome !== welcomeText.welcome_text) {
            console.log("el mensaje de bienvenida fue modificado");
        }
    }


    useEffect(() => {
        const getDataToEdit = async () => {
            try {
                const slidesResponse = await axios.get('http://ongapi.alkemy.org/api/slides')
                const welcomeResponse = await axios.get('http://ongapi.alkemy.org/api/organization')

                const slides = slidesResponse.data.data
                const welcomeText = welcomeResponse.data.data

                setSlidesData(slides);
                setWelcomeText(welcomeText);

                let slidesToEdit = []
                slides.forEach((slide) => {
                    slidesToEdit.push({
                        id: slide.id,
                        name: slide.name,
                        description: slide.description,
                        image: slide.image,
                        order: slide.order,
                        user_id: slide.user_id,
                        created_at: slide.created_at,
                        updated_at: slide.updated_at,
                        deleted_at: slide.deleted_at,
                        group_id: slide.group_id,
                    })
                })

                setInitialValues({
                    welcome: welcomeText.welcome_text,
                    slides: slidesToEdit
                })

            } catch (error) {
                console.error(error)
            }
        }
        getDataToEdit()
    }, [])



    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            // {{
            //     welcome: welcomeText,
            //     slides: [{
            //         name: '',
            //         description: '',
            //         image: '',
            //     }],
            // }}
            validationSchema={
                Yup.object().shape({
                    welcome: Yup.string().min(20, 'Debe tener por lo menos 20 caracteres.').required('Este campo es obligatorio'),
                    slides: Yup.array().of(
                        Yup.object().shape({
                            name: Yup.string().required('Este campo es obligatorio'),
                            description: Yup.string().required('Este campo es obligatorio'),
                            image: Yup.string().required('Este campo es obligatorio'),
                        })
                    )
                })
                // Yup.object({
                //     welcome: Yup.string().min(20, 'Debe tener por lo menos 20 caracteres.').required('Este campo es obligatorio'),
                // })
            }
            onSubmit={(values) => {
                // console.log(values)
                updateValues(values)
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
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
                                    <label>URL de la imagen</label>
                                    <Field
                                        name={`slides.${i}.image`}
                                        className='form__input'
                                    />

                                </div>
                            );
                        }))}
                    </FieldArray>
                </div>
                <button type='submit' className='form__button'>GUARDAR CAMBIOS</button>
            </Form>)}
        </Formik >
    )
}

export default HomeForm 