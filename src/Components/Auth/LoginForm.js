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
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
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
      if (user.name === 'Admin') {
        history.push("/backoffice/organization");
      } else if (user.name !== 'Admin') {
        window.location.href = '/' //Cambio a este metodo en lugar de history, para forzar el renderizado
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
    <div className="form__container form__container--public">
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
          <p className="form__title">Bienvenido!</p>
          <p className="form__subtitle">Iniciar sesión</p>
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <Field
            name="email"
            type="email"
            className="form__input"
            placeholder="juanperez@gmail.com"
          />
          <ErrorMessage
            name="email"
            render={(msg) => <div className="form__error">{msg}</div>}
          />

          <label htmlFor="password" className="form__label">
            Contraseña
          </label>
          <div className="form__password">
            <Field
              name="password"
              type={showPassword}
              className="form__input--password"
              placeholder="*******"
            />
            {showPassword === "password" ? (
              <VisibilityIcon
                className="form__visibility"
                onClick={() => setShowPassword("text")}
              />
            ) : (
              <VisibilityOffIcon
                className="form__visibility"
                onClick={() => setShowPassword("password")}
              />
            )}
          </div>
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
