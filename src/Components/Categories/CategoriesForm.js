import React, { useState } from 'react';
import '../FormStyles.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CategoriesForm = () => {
    const [userData, setUserData] = useState([]);
 
    const handleSubmit = (values) => {
        setUserData([
        ...userData,
        { name: values.name, description: values.description, categorie: values.categorie },
        ]);  
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
            categorie: Yup.string()
                .required("Este campo es obligatorio"),
            })}
            onSubmit={(values) => {
                handleSubmit(values);
                console.log(values);
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