import React from 'react';
import { Formik, Form, Field } from 'formik'

function ContactForm() {
  return (
    <div className="form-container">
      <Formik>
        <Form>

          <div>
            <label
              htmlFor='name'
            >Nombre:</label>
            <Field
              className="input-field"
              id="name"
              type="text"
              placeholder="Ingrese su nombre"
            />
          </div>

          <div>
            <label
              htmlFor='email'
            >Email:</label>
            <Field
              className="input-field"
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
      </Formik>
    </div>
  );
}

export default ContactForm;
