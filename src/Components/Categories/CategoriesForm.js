import { useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik'
import * as Yup from "yup";
import Error from '../Error/Error';


const CategoriesForm = () => {

    const [imagePreview, setImagePreview] = useState('/image/default.png');
    const [mesagge, setMesagge] = useState(false);

    const location = useLocation()
    const urlCurrent = location.pathname
    console.log(urlCurrent)

    const validationSchema = Yup.object().shape({
        category: Yup.string()
                    .min(4, 'El nombre de la categoría es muy corto')
                    .required('El nombre de la categoría es obligatorio'),
        description: Yup.string()
                    .required('La descripción de la categoría es obligatorio'),
                    
    })

    const handleSubmit = (values) => {

        if(imagePreview === "/image/default.png"){
            setMesagge(true)

            setTimeout(() => {
                setMesagge(false)
            }, 1500);

            return
        }

        console.log(values)
        console.log(imagePreview)

    }


    return (


        <div className='form-container'>
            <Formik
                initialValues={{
                    category: "",
                    description:"",

                }}

                onSubmit={ (values, props) => {
                    handleSubmit(values, props)
                }}
                
                validationSchema={validationSchema}
            >
                {({errors, touched}) => {
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
                        />
                    </div>

                    <input 
                        className="submit-btn" 
                        type="submit" 
                        value={(urlCurrent === '/create-category') ? "Add" : "Edit"}
                    />

                </Form>
                )}}
            </Formik>
        </div>


    );
}

export default CategoriesForm;