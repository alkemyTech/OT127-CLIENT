import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser, setToken } from "../../Redux/actions/authActions";
import { APIloginUser } from "../../Services/userService";
import { sweetAlertError } from "../../Services/sweetAlertServices";
import { useEffect } from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const LoginForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("TOKEN");

  const handleSubmit = async (values) => {
    setisLoading(true);
    try {
      let response = await APIloginUser(values);
      let { token, user } = response.data.data;
      dispatch(loginUser(user));
      dispatch(setToken(token));
      localStorage.setItem("TOKEN", token);
      localStorage.setItem("authenticatedUser", JSON.stringify(user));
      if (user.role_id === 1) {
        history.push("/backoffice/organization");
      } else if (user.role_id === 2) {
        history.push("/");
      }
    } catch (error) {
      sweetAlertError("Contraseña o usuario incorrectos");
    }
    setisLoading(false);
  };

  useEffect(() => {
    if (token) {
      dispatch(setToken(token)); // para persistir token por si la ruta se ingresa manualmente
      history.push("/");
    }
  }, []); //eslint-disable-line

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
          <Field
            name="password"
            type={showPassword ? "text" : "password"}
            className="form__input"
          />
          {!showPassword ? (
            <VisibilityIcon onClick={() => setShowPassword(!showPassword)} />
          ) : (
            <VisibilityOff onClick={() => setShowPassword(!showPassword)} />
          )}

          <ErrorMessage
            name="password"
            render={(msg) => <div className="form__error">{msg}</div>}
          />
          <button type="submit" className="form__button">
            {!isLoading ? "Entrar" : <Spinner size={30}></Spinner>}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
