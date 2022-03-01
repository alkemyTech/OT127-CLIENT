import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { APIRegisterUser } from "../../Services/userService";
import {
  sweetAlertConfirm,
  sweetAlertSuccess,
} from "../../Services/sweetAlertServices";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RegisterForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState("password");
  const isLogged = JSON.parse(localStorage.getItem("authenticatedUser"));
  let title = "Términos y condiciones";
  let text = "Acepta los términos y condiciones?";
  const imgTermsAndCoditions =
    "https://milformatos.com/wp-content/uploads/2019/08/Formato-de-T%C3%A9rminos-y-Condiciones.png";

  const handleSubmit = (values, { resetForm }) => {
    if (acceptTerms) {
      APIRegisterUser(values);
      sweetAlertSuccess("Te has registrado con éxito.");
      resetForm();
      setAcceptTerms(false);
      window.location.href = "/login";
    } else {
      sweetAlertConfirm(title, text, imgTermsAndCoditions).then((res) => {
        setAcceptTerms(res);
      });
    }
  };

  const handleChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const redirectToHome = () => {
    window.location.href = "/";
  };

  return (
    <div>
      {isLogged ? (
        redirectToHome()
      ) : (
        <div className="form__container form__container--public">
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Ingresá un nombre"),
              lastName: Yup.string().required("Ingresá un apellido"),
              email: Yup.string()
                .email("Formato de email inválido")
                .required("Ingresá un email"),
              password: Yup.string()
                .min(6, "La contraseña debe tener 6 caracteres como mínimo.")
                .matches(
                  /^(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/,
                  "Formato de contraseña inválida. Debe contener al menos: una letra minúscula, un número y un símbolo."
                )
                .required("Ingresá una contraseña"),
              confirmPassword: Yup.string()
                .oneOf(
                  [Yup.ref("password"), null],
                  "Las contraseñas deben ser iguales."
                )
                .required("Confirmá tu contraseña"),
            })}
            onSubmit={handleSubmit}
          >
            <Form className="form">
              <p className="form__title">Bienvenido!</p>
              <p className="form__subtitle">Registrate</p>
              {/* Cada campo está anidado en un div para poder darle estilos más facilmente */}
              {/*Los componentes ErrorMessage tienen un atributo render, eso va a servir para cuando agreguemos los estilos, solo hay que agregar la clase*/}
              <div className="form__subcontainer">
                <label htmlFor="name" className="form__label">
                  Nombre
                </label>
                <Field
                  name="name"
                  type="text"
                  className="form__input"
                  placeholder="Juan"
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => <div className="form__error">{msg}</div>}
                />
              </div>
              <div className="form__subcontainer">
                <label htmlFor="lastName" className="form__label">
                  Apellido
                </label>
                <Field
                  name="lastName"
                  type="text"
                  className="form__input"
                  placeholder="Perez"
                />
                <ErrorMessage
                  name="lastName"
                  render={(msg) => <div className="form__error">{msg}</div>}
                />
              </div>
              <div className="form__subcontainer">
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
              </div>
              <div className="form__subcontainer">
                <label htmlFor="password" className="form__label">
                  Contraseña
                </label>
                <div className="form__password">
                  <Field
                    name="password"
                    type={showPassword}
                    className="form__input--password"
                    placeholder="********"
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
              </div>
              <div className="form__subcontainer">
                <label htmlFor="confirmPassword" className="form__label">
                  Confirmar contraseña
                </label>
                <div className="form__password">
                  <Field
                    name="confirmPassword"
                    type={showPassword}
                    className="form__input--password"
                    placeholder="********"
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
                  name="confirmPassword"
                  render={(msg) => <div className="form__error">{msg}</div>}
                />
              </div>
              <div className="form__subcontainer">
                <div>
                  <Field
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={acceptTerms}
                    onChange={handleChange}
                  />
                  <label htmlFor="acceptTerms" className="form__label">
                    Aceptar términos y condiciones
                  </label>
                </div>
                <ErrorMessage
                  name="acceptTerms"
                  render={(msg) => <div className="form__error">{msg}</div>}
                />
              </div>

              <button type="submit" className="form__button">
                Registrar
              </button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
