import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../Redux/actions/authActions";
import { APIloginUser } from "../../Services/userService";

const LoginForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [authError, setauthError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    setisLoading(true);
    try {
      let response = await APIloginUser(values); //!NO ESTA FUNCIONANDO
      console.log(response);
      dispatch(loginUser(values));
    } catch (error) {
      setauthError(true);
      setTimeout(() => {
        setauthError(false);
      }, 4000);
    }
    setisLoading(false);
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
            {!isLoading ? "Entrar" : <Spinner size={30}></Spinner>}
          </button>
          {authError ? <div>ERROR!!!</div> : null}
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
