import React, { useState } from 'react';
import '../FormStyles.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const CategoriesForm = () => {
    
    const handleSubmit = async(values) => {
        /* // => OnSumit
        const [userData, setUserData] = useState([]);
        setUserData([
        ...userData,
        { name: values.name, description: values.description, categorie: values.categorie },
        ]); 
        */
        const name = values.name;
        const description = values.description;
        const categories = values.categorie;

        const baseUrl = 'http://ongapi.alkemy.org/api/news';

        axios
        .post( 
            baseUrl, {
                name, description, categories
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
            initialValues={{ name: "", description: "", categorie: ""  }}
            validationSchema={Yup.object({
            name: Yup.string()
                .min(4, "Debe tener por lo menos 4 caracteres.")
                .required("Este campo es obligatorio"),
            description: Yup.string()
                .required("Este campo es obligatorio"),
            categorie: Yup.string()
                .required("Este campo es obligatorio"),
            })}
            onSubmit={(values) => {
                handleSubmit(values);
            }}    
        >
            <Form>
                <label htmlFor="name">Titulo</label>
                <Field name="name" type="titulo" />
                <ErrorMessage name="name" />

                <label htmlFor="description">Description</label> 
                <Field name="description" type="description" />
                <ErrorMessage name="description"/>

                <label htmlFor="categorie">Categories</label> 
                <Field component="select" name="categorie" type="categorie">
                    <option value="option1" >categorie1</option>
                    <option value="option2">categorie2</option>
                </Field>
                <ErrorMessage name="categorie" />
                
                <button type="submit">Entrar</button>
            </Form>
        </Formik>
    );
}
export default CategoriesForm;