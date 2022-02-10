import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";
import './Members.scss';
import { useParams } from 'react-router-dom';
import "../../sass/components/_form.scss";



const MemberForm = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({name: "", description: "", facebookUrl: "", linkedinUrl: "", image: ""});
    const baseUrl = 'http://ongapi.alkemy.org/api/members';
    const inputFileRef = useRef();

    const handleSubmit = async(formValues) => {
        setLoading(true);
        const name = formValues.name;
        console.log(name);
        if (id) {
            await axios
            .put(`${baseUrl}/${id}`, formValues)
            .catch((err) => {
                alert(err.message);
            });
        } else {
            await axios
            .post(baseUrl, formValues)
            .catch((err) => {
                alert(err.message);
            });
        };
        setLoading(false);
    }

    const handleImage = (e, setFieldValue) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
          setFieldValue("image", reader.result);
        };
    };

    const getDataById = async (formValues) => {
        setLoading(true);
        await axios
        .get(`${baseUrl}/${id}`)
        .then((res) => {
            setFormValues(res.data.data);
        }).catch((err) => {
            alert(err.message);
        });
        setLoading(false);
    }
    
    useEffect(() => {
        if (id) {
            getDataById(id);
        }
    }, []);

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
                    .required("Campo obligatorio"),
                description: Yup.string()
                    .required("Campo obligatorio"),
                facebookUrl: Yup.string()
                    .required("Campo obligatorio")
                    .email('Formato invalido'),
                linkedinUrl: Yup.string()
                    .required("Campo obligatorio")
                    .email('Formato invalido'),
                })}

                onSubmit={({resetForm}) => {
                    handleSubmit();
                    resetForm();
                }}    
            >
                {({ setFieldValue }) => (
                    <Form className='member__container'>
                        <div className='member__form'>

                            <label htmlFor="name">Nombre</label>
                            <Field 
                                name="name" 
                                type="titulo" 
                                className='member__input' 
                                
                            />
                            <ErrorMessage name="name" />

                            <label htmlFor="description">Descripcion</label>
                            <Field name="description" className='member__input'>
                                {({ field }) => (
                                <>
                                    <CKEditor
                                    config={{
                                        language: "es",
                                    }}
                                    editor={ClassicEditor}
                                    data={field.value}
                                    onChange={(event, editor) => {
                                        setFieldValue(field.name, editor.getData());
                                    }}
                                    />
                                </>
                                )}
                            </Field>
                            <ErrorMessage
                                name="description"
                                render={(msg) => <div>{msg}</div>} 
                            />

                            <label htmlFor="image">Cargar Imagen</label>
                            <input
                                name="image"
                                ref={inputFileRef}
                                className='member__inputImg'
                                type="file"
                                accept=".jpg, .png"
                                onChange={(e) => {
                                    handleImage(e, setFieldValue);
                                }}
                            />
                            <ErrorMessage name="image" render={(msg) => <div>{msg}</div>} />

                            <label htmlFor="facebookUrl">Facebook</label> 
                            <Field 
                                name="facebookUrl" 
                                type="facebookUrl" 
                                className='member__input'
                                
                            />
                            <ErrorMessage name="facebookUrl"/>

                            <label htmlFor="linkedinUrl">LinkedIn</label> 
                            <Field 
                                name="linkedinUrl" 
                                type="linkedinUrl" 
                                className='member__input'
                                
                            />
                            <ErrorMessage name="linkedinUrl"/>
                            
                            <button className='bntSubmit' type="submit">Enviar</button>
                        </div>
                    </Form>
                )}
            </Formik>
            )}
        </>
    );
}
export default MemberForm;
