import React, { useState } from 'react';
import '../FormStyles.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const NewsForm = () => {
    
    const handleSubmit = async(values) => {

      console.log (values);
       
        const name = values.name;
        const description = values.description;
        const facebook = values.facebook;
        const linkedin = values.linkedin;
        const img = values.file;

        const baseUrl = 'http://ongapi.alkemy.org/api/members';

        axios
        .post( 
            baseUrl, {
                name, description, facebook, linkedin, img
            }
         )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <Formik
            initialValues={{ name: "", description: "", facebook: "", linkedin: "", file: ""}}
            validationSchema={Yup.object({
            name: Yup.string()
                .min(4, "Debe tener por lo menos 4 caracteres.")
                .required("Este campo es obligatorio"),
            description: Yup.string()
                .required("Este campo es obligatorio"),
            facebook: Yup.string()
                .required("Este campo es obligatorio")
                .email('No coloco un formato valido'),
            linkedin: Yup.string()
                .required("Este campo es obligatorio")
                .email('No coloco un formato valido'),
            })}

            onSubmit={(values) => {
                handleSubmit(values);
            }}    
        >
            <Form>
                <label htmlFor="name">Nombre</label>
                <Field name="name" type="titulo" />
                <ErrorMessage name="name" />

                <label htmlFor="description">Descripcion</label> 
                <Field name="description" type="description" />
                <ErrorMessage name="description"/>

                <label htmlFor="facebook">Facebook</label> 
                <Field name="facebook" type="facebook" />
                <ErrorMessage name="facebook"/>

                <label htmlFor="linkedin">LinkedIn</label> 
                <Field name="linkedin" type="linkedin" />
                <ErrorMessage name="linkedin"/>

                <input id="file" name="file" type="file"  />
                
                <button type="submit">Envia</button>
            </Form>
        </Formik>
    );
}
export default NewsForm;