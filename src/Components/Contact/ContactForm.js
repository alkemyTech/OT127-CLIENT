import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function ContactForm() {

  const phoneValidate = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const newContactSchema = Yup.object().shape({
    nameContact: Yup.string()
              .min(3, 'El nombre es muy corto')
              .max(30, 'El nombre es muy largo')
              .required('El nombre es Obligatorio'),
    emailContact: Yup.string()
              .email('El correo es obligatorio')
              .required('El correo es obligatorio'),
    phoneContact: Yup.string()
              .matches(phoneValidate, 'Numero no valido')
              .required('El numero de telefono es obligatorio')
              .min(8, 'Deben ser 8 caracteres minimo'),
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
          nameContact: '',
          emailContact: '',
          phoneContact: '',
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
              htmlFor='nameContact'
            >Nombre:</label>
            <Field
              className="input-field"
              name="nameContact"
              id="nameContact"
              type="text"
              placeholder="Ingrese su nombre"
            />
            {/* Cambiar el div del mensaje de error por el componente creado para form category */}
            {errors.nameContact && touched.nameContact ? (
              <div>{errors.nameContact}</div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor='emailContact'
            >Email:</label>
            <Field
              className="input-field"
              name="emailContact"
              id="emailContact"
              type="text"
              placeholder="Ingrese correo electronico"
            />
            {/* Cambiar el div del mensaje de error por el componente creado para form category */}
            {errors.emailContact && touched.emailContact ? (
              <div>{errors.emailContact}</div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor='phoneContact'
            >Teléfono:</label>
            <Field
              className="input-field"
              name="phoneContact"
              id="phoneContact"
              type="text"
              placeholder="Ingrese su número de teléfono"
            />
            {/* Cambiar el div del mensaje de error por el componente creado para form category */}
            {errors.phoneContact && touched.phoneContact ? (
              <div>{errors.phoneContact}</div>
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
