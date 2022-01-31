import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {useParams} from "react-router-dom";


const NewsForm = () => {
    
    
    let { id } = useParams(); 

    const [newsAPI, setNewsAPI] = useState([]);

    const handleSubmit = async(values) => {
        
        const name = values.name;
        const description = values.description;
        const NewForm = values.NewForm;
        const baseUrl = 'http://ongapi.alkemy.org/api/news';

        if (id) {
			axios.put(`${baseUrl}/${id}`, {
				id,
				name,
				description,
			})
            .then((response) => {
                // To do
                console.log(response);
                
            })
            .catch((error) => {
                // to do
                console.log(error);
            });
		} else {
            axios
            .post( 
                baseUrl, {
                    name, description, NewForm
                }
            )
            .then(function (response) {
                //to do
                console.log(response);
            })
            .catch(function (error) {
                //to do
            });
            
        }
    };

    useEffect(() => {
        const URLNews = 'http://ongapi.alkemy.org/api/news';
        axios.get(URLNews)
            .then((response) => {
                //to do
            })
            .catch((error) => {
                //to do
        });
    }, []);
    
    const img = 'http://ongapi.alkemy.org/storage/zcCthBIvEr.png';
    
    return (
        <Formik
        initialValues={{ name: "", description: "", NewForm: ""  }}
        validationSchema={Yup.object({
            name: Yup.string()
                .min(4, "Debe tener por lo menos 4 caracteres.")
                .required("Este campo es obligatorio"),
            description: Yup.string()
                .required("Este campo es obligatorio"),
            NewForm: Yup.string()
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

                <label htmlFor="NewForm">New Form</label> 
                <Field component="select" as='select' name="NewForm" type="NewForm">
                    {newsAPI.map(element => {
                        return (
                            <option key={element.id} value={element.id}>
                                {element.name}
                            </option>
                        )
                    })}
                </Field>
                <ErrorMessage name="categorie" />  
                
                <img src={img} alt="image" />

                <button type="submit">Enviar</button>
            </Form>
        </Formik>
    );
}
export default NewsForm;
