import React, { useState, useEffect, useRef } from 'react';
import '../FormStyles.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";
import './Members.scss';

const NewsForm = () => {

    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({name: "", description: "", facebookUrl: "", linkedinUrl: "", file: ""});
    const baseUrl = 'http://ongapi.alkemy.org/api/members';
    const inputFileRef = useRef();
    
    const handleSubmit = async(setFormValues) => {
        setLoading(true);
        const name = setFormValues.name;
        const description = setFormValues.description;
        const facebookUrl = setFormValues.facebookUrl;
        const linkedinUrl = setFormValues.linkedinUrl;
        const image = setFormValues.file;
        console.log(name);

        axios
        .post( 
            baseUrl, {
                name, description, facebookUrl, linkedinUrl, image
            }
         )
        .then(function (response) {
            console.log(response);
            // To do
            return response.config.data;
        })
        .catch(function (error) {
            return error;
        });
        setLoading(false);
    };
    
    return (
        <>
            {loading ? (
                <p>LOADING..</p>
            ) : (
            <Formik
                enableReinitialize={true}
                initialValues={formValues}
                validationSchema={Yup.object({
                name: Yup.string()
                    .min(4, "Debe tener por lo menos 4 caracteres.")
                    .required("Este campo es obligatorio"),
                description: Yup.string()
                    .required("Este campo es obligatorio"),
                facebookUrl: Yup.string()
                    .required("Este campo es obligatorio")
                    .email('No coloco un formato valido'),
                linkedinUrl: Yup.string()
                    .required("Este campo es obligatorio")
                    .email('No coloco un formato valido'),
                })}

                onSubmit={(setFormValues, {resetForm}) => {
                    handleSubmit(setFormValues);
                    resetForm();
                }}    
            >
                {({ setFieldValue }) => (
                    <Form className='form'>
                        <label htmlFor="name">Nombre</label>
                        <Field name="name" type="titulo" className='input-container' />
                        <ErrorMessage name="name" />

                        <label htmlFor="description">Descripcion</label>
                        <Field name="description" className='input-container'>
                            {({ field }) => (
                            <>
                                <CKEditor
                                config={{
                                    language: "es",
                                }}
                                editor={ClassicEditor}
                                data={field.value}
                                onChange={(event, editor) => {
                                    setFieldValue(field.name, editor.handleSubmit());
                                }}
                                />
                            </>
                            )}
                        </Field>
                        <ErrorMessage
                            name="description"
                            render={(msg) => <div>{msg}</div>}
                        />

                        <label htmlFor="categorie">Cargar Imagen</label>
                        <input
                            ref={inputFileRef}
                            className='inputs'
                            type="file"
                            onChange={(e) => {
                            setFieldValue("image", e.currentTarget.files[0]);
                            }}
                            accept=".jpg, .png"
                        />
                        <ErrorMessage name="image" render={(msg) => <div>{msg}</div>} />

                        <label htmlFor="facebookUrl">Facebook</label> 
                        <Field name="facebookUrl" type="facebookUrl" className='input-container' />
                        <ErrorMessage name="facebookUrl"/>

                        <label htmlFor="linkedinUrl">LinkedIn</label> 
                        <Field name="linkedinUrl" type="linkedinUrl" className='input-container' />
                        <ErrorMessage name="linkedinUrl"/>
                        
                        <button type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>
            )}
        </>
    );
}
export default NewsForm;