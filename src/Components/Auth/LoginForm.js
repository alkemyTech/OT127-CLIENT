import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const [userData, setUserData] = useState([]);

  const handleSubmit = (values) => {
    setUserData([
      ...userData,
      { email: values.email, password: values.password },
    ]);
  };

  return (
    <div className="form__container">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email inválido")
            .required("Este campo es obligatorio"),
          password: Yup.string()
            .min(6, "Debe tener por lo menos 6 caracteres.")
            .matches(
              /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, // eslint-disable-line
              "Debe contener al menos una letra, un número y un símbolo."
            )
            .required("Este campo es obligatorio"),
        })}
        onSubmit={(values) => {
          handleSubmit(values);
          localStorage.setItem("TOKEN", values.email);
        }}
      >
        <Form className="form">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <Field name="email" type="email" className="form__input" />
          <ErrorMessage
            name="email"
            render={(msg) => <div className="form__error">{msg}</div>}
          />

          <label htmlFor="password" className="form__label">
            Contraseña
          </label>
          <Field name="password" type="password" className="form__input" />
          <ErrorMessage
            name="password"
            render={(msg) => <div className="form__error">{msg}</div>}
          />

          <button type="submit" className="form__button">
            Entrar
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
