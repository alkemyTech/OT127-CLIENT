import React from "react";
<<<<<<< HEAD
import { Formik, Form, Field, ErrorMessage } from "formik";
=======
import { Formik, Form, Field } from "formik";
>>>>>>> 03ed2e218d3cb49b7dfc00d802e2e4412a317482
import * as Yup from "yup";
import { postContact } from "../../Services/contactServices";

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
<<<<<<< HEAD
    // to do (logica pendiente)
  };

  return (
    <div className="form__container">
=======
    postContact(values);
  };

  return (
    <div className="form-container">
>>>>>>> 03ed2e218d3cb49b7dfc00d802e2e4412a317482
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
<<<<<<< HEAD
            <Form className="form">
              <div className="form__subcontainer">
                <label className="form__label" htmlFor="name">
                  Nombre:
                </label>
                <Field
                  className="form__input"
=======
            <Form>
              <div>
                <label htmlFor="name">Nombre:</label>
                <Field
                  className="input-field"
>>>>>>> 03ed2e218d3cb49b7dfc00d802e2e4412a317482
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Ingrese su nombre"
                />
<<<<<<< HEAD
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
=======
                {/* Cambiar el div del mensaje de error por el componente creado para form category */}
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <Field
                  className="input-field"
>>>>>>> 03ed2e218d3cb49b7dfc00d802e2e4412a317482
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Ingrese correo electronico"
                />
<<<<<<< HEAD
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
=======
                {/* Cambiar el div del mensaje de error por el componente creado para form category */}
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="phone">Teléfono:</label>
                <Field
                  className="input-field"
>>>>>>> 03ed2e218d3cb49b7dfc00d802e2e4412a317482
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="Ingrese su número de teléfono"
                />
<<<<<<< HEAD
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
=======
                {/* Cambiar el div del mensaje de error por el componente creado para form category */}
                {errors.phone && touched.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="message">Mensaje:</label>
                <Field
                  className="input-field"
>>>>>>> 03ed2e218d3cb49b7dfc00d802e2e4412a317482
                  name="message"
                  type="text"
                  id="message"
                  placeholder="Mensaje"
                />
<<<<<<< HEAD
                <ErrorMessage
                  name="message"
                  render={(msg) => (
                    <div className="form__error">{msg}</div>
                  )}
                />
              </div>

              <button className="form__button" type="submit">
=======
                {/* Cambiar el div del mensaje de error por el componente creado para form category */}
                {errors.message && touched.message ? (
                  <div>{errors.message}</div>
                ) : null}
              </div>

              <button className="submit-btn" type="submit">
>>>>>>> 03ed2e218d3cb49b7dfc00d802e2e4412a317482
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
