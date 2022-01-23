import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import * as Yup from "yup";
import Error from '../Error/Error';


const CategoriesForm = () => {

    const [imagePreview, setImagePreview] = useState('');
    const [mesagge, setMesagge] = useState(false);

    const location = useLocation()
    const urlCurrent = location.pathname

    const validationSchema = Yup.object().shape({
        category: Yup.string()
            .min(4, 'El nombre de la categoría es muy corto')
            .required('El nombre de la categoría es obligatorio'),
        description: Yup.string()
            .required('La descripción de la categoría es obligatorio'),

    })

    const handleSubmit = (values) => {

        if (imagePreview === "") {
            setMesagge(true)

            setTimeout(() => {
                setMesagge(false)
            }, 1500);

            return
        }

        if (urlCurrent === '/create-category') {
            axios
                .post("http://ongapi.alkemy.org/docs", values, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios
                .put("http://ongapi.alkemy.org/docs", values, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        }


    }


    return (


        <div className='form-container'>
            <Formik
                initialValues={{
                    category: "",
                    description: "",

                }}

                onSubmit={(values, props) => {
                    handleSubmit(values, props)
                }}

                validationSchema={validationSchema}
            >
                {({ errors, touched, setFieldValue }) => {
                    return (
                        <Form>

                            <div>
                                <label
                                    htmlFor="category"
                                >Nombre:</label>
                                <Field
                                    className="input-field"
                                    type="text"
                                    placeholder="Nombre de la Categoría"
                                    id="category"
                                    name="category"
                                />
                                {errors.category && touched.category ? (
                                    <Error>{errors.category}</Error>
                                ) : null}
                            </div>

                            <div>
                                <label
                                    htmlFor="description"
                                >Descripción:</label>
                                <Field
                                    className="input-field"
                                    type="text"
                                    placeholder="Descripción de la Categoría"
                                    id="description"
                                    name="description"
                                />
                                {errors.description && touched.description ? (
                                    <Error>{errors.description}</Error>
                                ) : null}
                            </div>

                            <div>
                                <label
                                    htmlFor="image"
                                >Descripción:</label>
                                <Field
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={(e) => {
                                        const fileReader = new FileReader();
                                        fileReader.onload = () => {
                                            if (fileReader.readyState === 2) {
                                                setFieldValue('imageURL', fileReader.result);
                                                setImagePreview(fileReader.result);
                                            }
                                        };
                                        fileReader.readAsDataURL(e.target.files[0]);
                                    }}
                                />
                                {mesagge ? (
                                    <Error>Debe agregar una Imagen</Error>
                                ) : null}
                            </div>

                            <input
                                className="submit-btn"
                                type="submit"
                                value={(urlCurrent === '/create-category') ? "Guardar" : "Editar"}
                            />

                        </Form>
                    )
                }}
            </Formik>
        </div>


    );
}

export default CategoriesForm;