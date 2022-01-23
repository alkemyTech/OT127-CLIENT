import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function ContactForm() {

  const newContactSchema = Yup.object().shape({
    contactName: Yup.string()
              .min(3, 'El nombre es muy corto')
              .max(30, 'El nombre es muy largo')
              .required('El nombre es Obligatorio'),
    email: Yup.string()
              .email('El correo es obligatorio')
              .required('El correo es obligatorio'),
    phone: Yup.number()
              .positive()
              .typeError('El numero no es valido')
              .integer('Numero no valido')
              .required('El numero de telefono es obligatorio'),
    mesaggeContact: Yup.string()
                .max(50, 'El mensaje es muy largo')
                .required('Debe colocar un mensaje'),
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
          mesaggeContact:''
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
            {/* Cambiar el div del mensaje de error por el componente creado para form category */}
            {errors.email && touched.email ? (
              <div>{errors.email}</div>
            ) : null}
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
            {/* Cambiar el div del mensaje de error por el componente creado para form category */}
            {errors.phone && touched.phone ? (
              <div>{errors.phone}</div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor='mesaggeContact'
            >Mensaje:</label>
            <Field
              className="input-field"
              name="mesaggeContact"
              type="text"
              id="mesaggeContact"
              placeholder="Mensaje"
            />
            {/* Cambiar el div del mensaje de error por el componente creado para form category */}
            {errors.mesaggeContact && touched.mesaggeContact? (
              <div>{errors.mesaggeContact}</div>
            ) : null}
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
