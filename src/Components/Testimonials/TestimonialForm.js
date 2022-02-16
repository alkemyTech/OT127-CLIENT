import { useParams } from "react-router-dom"
import * as Yup from "yup"
import { Field, Form, Formik } from "formik"
import { useEffect, useState, useRef } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import axios from "axios"

import "../../sass/components/_form.scss"
import "./styles.scss"
import { sweetAlertError } from "../../Services/sweetAlertServices"

const TestimonialForm = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [create, setCreate] = useState(true)
    const url = "http://ongapi.alkemy.org/api/testimonials"

    const { id } = useParams()

    const Post = async (url, body) => {
        try {
            const res = await axios.post(url, body)
            return res.data
        } catch (error) {
            sweetAlertError("No se pudo crear el testimonio")
        }
    }

    const Put = async (url, id, body) => {
        try {
            const res = await axios.put(`${url}/${id}`, body)
            return res.data
        } catch (error) {
            sweetAlertError("No se pudo actualizar el testimonio")
        }
    }

    const Get = async (url, id) => {
        try {
            const res = await axios.get(`${url}/${id}`)
            return res.data
        } catch (error) {
            sweetAlertError("No se pudo traer la informacion de los testimonios")
        }
    }

    const getImagePreview = async (url) => {
        const data = await fetch(url)
        const blob = await data.blob()
        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.readAsDataURL(blob)
            reader.onloadend = () => {
                const base64data = reader.result
                resolve(base64data)
            }
        })
    }

    const submitForm = async (values, formik) => {
        if (create) {
            try {
                const res = await Post(
                    url,
                    values
                )
                formik.setSubmitting(false)
            } catch (error) {
                sweetAlertError("No se pudo crear el testimonio")
            }
        } else {
            try {
                const res = await Put(
                    url,
                    id,
                    values
                )
                formik.setSubmitting(false)
            } catch (error) {
                sweetAlertError("No se pudo actualizar el testimonio")
            }
        }
    }

    const getDataTestimonials = async () => {
        if (id) {
            try {
                await Get(url, id).then(
                    (res) => {
                        const {
                            data: { name, description, image },
                        } = res
                        getImagePreview(image).then((imagen64) => {
                            setImage(imagen64)
                        })
                        setName(name)
                        setDescription(description)
                        setCreate(false)
                    }
                )
            } catch (error) {
                sweetAlertError("No se pudo traer la informacion de los testimonios")
            }
        }
    }

    useEffect(() => {
        getDataTestimonials()
        // eslint-disable-next-line
    }, [])



    const handleChange = (e, propsFormik) => {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            const reader = new FileReader()
            reader.onload = function (e) {
                propsFormik.setFieldValue("image", e.target.result)
            }
            reader.readAsDataURL(e.currentTarget.files[0])
        }
    }

    const handleChangeCKE = (event, editor, props) => {
        const data = editor.getData()
        props.setFieldValue("description", data)
    }

    const inputFileRef = useRef()

    const ErrorYup = Yup.object().shape({
        name: Yup.string()
            .required("El campo nombre es requerido.")
            .min(4, "El nombre debe tener al menos 4 caracteres"),
        description: Yup.string().required("El campo descripcion es requerido."),
        image: Yup.string().required("La imagen es requerida."),
    })

    const resetForm = (e, propsFormik) => {
        propsFormik.resetForm()
        inputFileRef.current.value = null
    }

    return (
        <div>
            <Formik
                initialValues={{ name, description, image }}
                onSubmit={(values, formik) => {
                    submitForm(values, formik)
                }}
                validationSchema={ErrorYup}
                enableReinitialize={true}
                validateOnMount={!create}
            >
                {(props) => {
                    return (
                        <Form className="form">
                            <h3 className="form__header-title">Testimonial Form</h3>
                            <label className="form__label">Nombre: </label>
                            <Field
                                name="name"
                                type="text"
                                className="input-field"
                            />
                            <small className="form__text-error">
                                {props.initialTouched && props.errors.name}
                            </small>
                            <label className="form__label">
                                Imagen:
                            </label>
                            <div className="form__image-container">
                                <input
                                    type="file"
                                    ref={inputFileRef}
                                    name="image"
                                    accept="image/png,image/jpeg"
                                    onChange={(event) => {
                                        handleChange(event, props)
                                    }}
                                />
                                <img
                                    className="form__image-preview"
                                    src={props.values.image}
                                    alt="imgPreview"
                                />
                            </div>
                            <small className="form__text-error">
                                {props.initialTouched.image && props.errors.image}
                            </small>
                            <label className="form__label">Descripcion: </label>
                            <CKEditor
                                name="description"
                                editor={ClassicEditor}
                                data={description}
                                onChange={(event, editor) => {
                                    handleChangeCKE(
                                        event,
                                        editor,
                                        props
                                    )
                                }}
                            />
                            <small className="form__text-error">
                                {props.initialTouched.description && props.errors.description}
                            </small>
                            <button type="button"
                                onClick={(event) => resetForm(event, props)}>
                                Reset
                            </button>
                            {!create ? (
                                <button
                                    type="submit"
                                    disabled={
                                        !props.isValid || props.isSubmitting
                                    }
                                >
                                    Actualizar
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={
                                        !(props.isValid && props.dirty) ||
                                        props.isSubmitting
                                    }
                                >
                                    Crear
                                </button>
                            )}
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
export default TestimonialForm
