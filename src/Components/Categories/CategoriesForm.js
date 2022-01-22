import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik'


const CategoriesForm = () => {

    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");
    // const [image, setImage] = useState("");

    const location = useLocation()
    const urlCurrent = location.pathname
    console.log(urlCurrent)

    const handleSubmit = (values, props) => {
        console.log(values, props)
    }



    // const handleImage = e => {
    //     setImage(URL.createObjectURL(e.currentTarget.files[0]))
    // }


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (urlCurrent === '/create-category') {
    //         // Modifico
    //         // path
    //         console.log("Actualizando")

    //     } else {
    //         // Creo
    //         // post
    //         console.log("Creando")
    //     }

    // }

    return (


        <div className='form-container'>
            <Formik
                initialValues={{
                    category: "",
                    description:"",
                    image: ""

                }}

                onSubmit={ (values, props) => {
                    handleSubmit(values, props)
                }}
            >
                {() => (
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
                    </div>
                    <div>
                        <label
                            htmlFor="image"
                        >Descripción:</label>
                        <Field
                            type="file"
                            id="image"
                            name="image"
                        />
                    </div>

                    <input 
                        className="submit-btn" 
                        type="submit" 
                        value={(urlCurrent === '/create-category') ? "Add" : "Edit"}
                    />

                </Form>
                )}
            </Formik>
        </div>


    );
}

export default CategoriesForm;