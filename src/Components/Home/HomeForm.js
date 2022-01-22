import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const HomeForm = () => {
    return (
        <Formik
            initialValues={{ welcome: '' }}
            validationSchema={Yup.object({
                welcome: Yup.string().min(20, 'Debe tener por lo menos 20 caracteres.').required('Este campo es obligatorio'),
            })}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form>
                <label htmlFor="welcome">
                    Texto de Bienvenida
                </label>
                <Field name="welcome" />
                <ErrorMessage name="welcome" />


                <button type='submit'>Guardar Cambios</button>
            </Form>
        </Formik>
    )
};

export default HomeForm;
