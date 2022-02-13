import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactForm() {
  const phoneValidate =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const newContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(30, "El nombre es muy largo")
      .required("El nombre es Obligatorio"),
    email: Yup.string()
      .email("El correo es obligatorio")
      .required("El correo es obligatorio"),
    phone: Yup.string()
      .matches(phoneValidate, "Numero no valido")
      .required("El numero de telefono es obligatorio")
      .min(8, "Deben ser 8 caracteres minimo"),
    message: Yup.string()
      .max(50, "El mensaje es muy largo")
      .required("Debe colocar un mensaje"),
  });

  const handleSubmit = (values) => {
    // to do (logica pendiente)
  };

  return (
    <div className="form__container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={newContactSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="form">
              <div className="form__subcontainer">
                <label className="form__label" htmlFor="name">
                  Nombre:
                </label>
                <Field
                  className="form__input"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Ingrese su nombre"
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => (
                    <div className="form__error">{msg}</div>
                  )}
                />
              </div>

              <div className="form__subcontainer">
                <label className="form__label" htmlFor="email">
                  Email:
                </label>
                <Field
                  className="form__input"
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Ingrese correo electronico"
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <div className="form__error">{msg}</div>
                  )}
                />
              </div>

              <div className="form__subcontainer">
                <label className="form__label" htmlFor="phone">
                  Teléfono:
                </label>
                <Field
                  className="form__input"
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="Ingrese su número de teléfono"
                />
                <ErrorMessage
                  name="phone"
                  render={(msg) => (
                    <div className="form__error">{msg}</div>
                  )}
                />
              </div>

              <div className="form__subcontainer">
                <label className="form__label" htmlFor="message">
                  Mensaje:
                </label>
                <Field
                  className="form__input"
                  name="message"
                  type="text"
                  id="message"
                  placeholder="Mensaje"
                />
                <ErrorMessage
                  name="message"
                  render={(msg) => (
                    <div className="form__error">{msg}</div>
                  )}
                />
              </div>

              <button className="form__button" type="submit">
                Enviar
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default ContactForm;
