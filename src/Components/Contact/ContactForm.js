import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ContactForm() {

  const newContactSchema = Yup.object().shape({
    contactName: Yup.string()
                    .min(3, 'El nombre es muy corto')
                    .max(20, 'El nombre es muy largo')
                    .required('El nombre es Obligatorio'),
  })

  const handleSubmit = (values) => {
    console.log(values)
  } 

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          contactName: '',
          email: '',
          phone: '',
          mesagge:''
        }}
        onSubmit={ (values) => {
          handleSubmit(values)
        }}
        validationSchema={newContactSchema}
      >
        {({errors, touched}) => {

          return (
          <Form>

          <div>
            <label
              htmlFor='contactName'
            >Nombre:</label>
            <Field
              className="input-field"
              name="contactName"
              id="contactName"
              type="text"
              placeholder="Ingrese su nombre"
            />
            {/* Cambiar el div del mensaje de error por el componente creado para form category */}
            {errors.contactName && touched.contactName ? (
              <div>{errors.contactName}</div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor='email'
            >Email:</label>
            <Field
              className="input-field"
              name="email"
              id="email"
              type="text"
              placeholder="Ingrese correo electronico"
            />
          </div>

          <div>
            <label
              htmlFor='phone'
            >Teléfono:</label>
            <Field
              className="input-field"
              name="phone"
              id="phone"
              type="tel"
              placeholder="Ingrese su número de teléfono"
            />
          </div>

          <div>
            <label
              htmlFor='mesagge'
            >Mensaje:</label>
            <Field
              className="input-field"
              name="mesagge"
              as="textarea"
              id="mesagge"
              type="text"
              placeholder="Mensaje"
            />
          </div>

          <input
            className="submit-btn"
            type="submit"
            value="Enviar"
          />

        </Form>
        )}}
        
      </Formik>
    </div>
  );
}

export default ContactForm;
