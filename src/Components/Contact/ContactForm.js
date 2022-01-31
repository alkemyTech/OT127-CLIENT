import React from "react";
import { Formik, Form, Field } from "formik";
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
    <div className="form-container">
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
            <Form>
              <div>
                <label htmlFor="name">Nombre:</label>
                <Field
                  className="input-field"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Ingrese su nombre"
                />
                {/* Cambiar el div del mensaje de error por el componente creado para form category */}
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </div>

              <div>
                <label htmlFor="email">Email:</label>
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
                <label htmlFor="phone">Teléfono:</label>
                <Field
                  className="input-field"
                  name="phone"
                  id="phone"
                  type="text"
                  placeholder="Ingrese su número de teléfono"
                />
                {/* Cambiar el div del mensaje de error por el componente creado para form category */}
                {errors.phone && touched.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="message">Mensaje:</label>
                <Field
                  className="input-field"
                  name="message"
                  type="text"
                  id="message"
                  placeholder="Mensaje"
                />
                {/* Cambiar el div del mensaje de error por el componente creado para form category */}
                {errors.message && touched.message ? (
                  <div>{errors.message}</div>
                ) : null}
              </div>

              <button className="submit-btn" type="submit">
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
