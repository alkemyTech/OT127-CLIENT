import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {useParams} from "react-router-dom";


const NewsForm = () => {
    
    
    let { id } = useParams(); 

    const [newsAPI, setNewsAPI] = useState([]);
    const [formValues, setFormValues] = useState({name: "", description: "", categorie: ""})  
    const baseUrl = 'http://ongapi.alkemy.org/api/news';

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setFormValues({...formValues, name: e.target.value})
        } if(e.target.name === 'description'){
            setFormValues({...formValues, description: e.target.value})
        } if(e.target.categorie === 'categorie'){
            setFormValues({...formValues, categorie: e.target.value})
        }
    }

    const handleSubmit = async(setFormValues) => {
        
        const name = setFormValues.name;
        const description = setFormValues.description;
        const categorie = setFormValues.categorie;

        if (id) {
			axios.put(`${baseUrl}/${id}`, {
				id,
				name,
				description,
                categorie,
			})
            .then((response) => {
                // To do    
                return response.config.data;            
            })
            .catch((error) => {
                return error;
            });
		} else {
            axios
            .post( 
                baseUrl, {
                    name, description, categorie
                }
            )
            .then(function (response) {
                // To do
                return response.config.data;
            })
            .catch(function (error) {
                return error;
            });
            
        }
    };

    useEffect(() => {
        axios.get(baseUrl)
            .then((response) => {
                setNewsAPI(response.data.data);
            })
            .catch((error) => {
                return error;
        });
    }, []);
    
    const img = 'http://ongapi.alkemy.org/storage/zcCthBIvEr.png';
    
    return (
        <Formik
        initialValues={formValues}
        validationSchema={Yup.object({
            name: Yup.string()
                .min(4, "Debe tener por lo menos 4 caracteres.")
                .required("Este campo es obligatorio"),
            description: Yup.string()
                .required("Este campo es obligatorio"),
            categorie: Yup.string()
                .required("Este campo es obligatorio"),
            })}
            onSubmit={(formValues) => {
                handleSubmit(formValues);
            }}    
        >
            <Form>
                <label htmlFor="name">Titulo</label>
                <Field name="name" type="titulo" />
                <ErrorMessage name="name" />

                <label htmlFor="description">Contenido</label> 
                <Field name="description" type="description" />
                <ErrorMessage name="description"/>

                <label htmlFor="categorie">Categorias</label> 
                <Field component="select" as='select' name="categorie" type="categorie">
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
