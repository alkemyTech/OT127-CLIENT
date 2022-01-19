import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../FormStyles.css";

const RegisterForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Campo obligatorio"),
          lastName: Yup.string().required("Campo obligatorio"),
          email: Yup.string()
            .email("Formato de email inválido")
            .required("Campo obligatorio"),
          password: Yup.string()
            .min(6, "La contraseña debe tener 6 caracteres como mínimo.")
            .matches(
              /^(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/,
              "Formato de contraseña inválida. Debe contener al menos: una letra minúscula, un número y un símbolo."
            )
            .required(),
          confirmPassword: Yup.string()
            .oneOf(
              [Yup.ref("password"), null],
              "Las contraseñas deben ser iguales."
            )
            .required(),
        })}
        onSubmit={(values) => {
          const User = values; // Este es el objeto que va a ser enviado
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Nombre</label>
            <Field name="name" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">Apellido</label>
            <Field name="lastName" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <Field name="password" type="password" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <Field name="confirmPassword" type="password" />
          </div>

          <div>
            {/*Los componentes ErrorMessage tienen un atributo render, eso va a servir para cuando agreguemos los estilos, solo hay que agregar la clase*/}
            <ErrorMessage name="name" render={(msg) => <div>{msg}</div>} />
            <ErrorMessage name="lastName" render={(msg) => <div>{msg}</div>} />
            <ErrorMessage name="email" render={(msg) => <div>{msg}</div>} />
            <ErrorMessage name="password" render={(msg) => <div>{msg}</div>} />
            <ErrorMessage
              name="confirmPassword"
              render={(msg) => <div>{msg}</div>}
            />
          </div>

          <button type="submit">Registrar</button>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
