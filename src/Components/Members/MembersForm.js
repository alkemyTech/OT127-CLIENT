import React, { useState } from 'react';
import '../FormStyles.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const NewsForm = () => {

    const [formValues, setFormValues] = useState({name: "", description: "", facebookUrl: "", linkedinUrl: "", file: ""});
    
    const baseUrl = 'http://ongapi.alkemy.org/api/members';
    
    const handleSubmit = async(setFormValues) => {
       
        const name = setFormValues.name;
        const description = setFormValues.description;
        const facebookUrl = setFormValues.facebookUrl;
        const linkedinUrl = setFormValues.linkedinUrl;
        const image = setFormValues.file;

        axios
        .post( 
            baseUrl, {
                name, description, facebookUrl, linkedinUrl, image
            }
         )
        .then(function (response) {
            // To do
            return response.config.data;
        })
        .catch(function (error) {
            return error;
        });
    };

    return (
        <Formik
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

            onSubmit={(setFormValues) => {
                handleSubmit(setFormValues);
            }}    
        >
            <Form>
                <label htmlFor="name">Nombre</label>
                <Field name="name" type="titulo" />
                <ErrorMessage name="name" />

                <label htmlFor="description">Descripcion</label> 
                <Field name="description" type="description" />
                <ErrorMessage name="description"/>

                <label htmlFor="facebookUrl">Facebook</label> 
                <Field name="facebookUrl" type="facebookUrl" />
                <ErrorMessage name="facebookUrl"/>

                <label htmlFor="linkedinUrl">LinkedIn</label> 
                <Field name="linkedinUrl" type="linkedinUrl" />
                <ErrorMessage name="linkedinUrl"/>

                <input id="file" name="file" type="file"  />
                
                <button type="submit">Envia</button>
            </Form>
        </Formik>
    );
}
export default NewsForm;