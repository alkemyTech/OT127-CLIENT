import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../FormStyles.css";

const LoginForm = () => {
  const [userData, setUserData] = useState([]);

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Email inválido")
            .required("Este campo es obligatorio"),
          password: Yup.string()
            .min(6, "Debe tener por lo menos 6 caracteres.")
            .matches(
              /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
              "Debe contener al menos una letra, un número y un símbolo."
            )
            .required("Este campo es obligatorio"),
        })}
        onSubmit={(values) => {
          let loginUser = {
            email: values.email,
            password: values.password,
          };
          setUserData([...userData, loginUser]);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="password">Contraseña</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />

          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
