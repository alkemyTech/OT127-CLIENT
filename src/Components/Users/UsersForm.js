import React from "react";
import { useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "../FormStyles.css";

const UserForm = () => {
  const { id } = useParams();
  let initialValues = {};
  if (id) {
    // Para obtener éstos valores, hay que irlos a buscar al backend?? usando el id como id??
    initialValues = {
      name: "prueba",
      email: "prueba@prueba.com",
      role: "",
      profilePhoto: "",
    };
  } else {
    initialValues = { name: "", email: "", role: "", profilePhoto: "" };
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(4, "El nombre debe tener 4 letras como mínimo")
          .required("Campo obligatorio"),
        email: Yup.string()
          .email("Formato de email inválido")
          .required("Campo obligatorio"),
        role: Yup.string().required("Campo obligatorio"),
      })}
      onSubmit={(values) => {
        //Si estamos creando
        axios
          .post("url", {
            //revisar url
            name: values.name,
            email: values.email,
            role: values.role,
            profilePhoto: values.profilePhoto,
          })
          .then((res) => {
            console.log(res); //Revisar qué hacer
          })
          .catch((error) => {
            console.log(error); //Revisar qué hacer
          });
        //Si estamos editando
        axios
          .patch("url", {
            name: values.name,
            email: values.email,
            role: values.role,
            profilePhoto: values.profilePhoto,
          })
          .then((res) => {
            console.log(res); //Revisar qué hacer
          })
          .catch((error) => {
            console.log(error); //Revisar qué hacer
          });
      }}
    >
      {(formProps) => (
        <Form>
          <div>
            <label htmlFor="name">Nombre</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="name">Rol</label>
            <Field name="role" as="select">
              <option value="administrador">Administrador</option>
              <option value="regular">Regular</option>
            </Field>
            <ErrorMessage name="role" />
          </div>
          <div>
            <input
              name="profilePhoto"
              type="file"
              onChange={(event) => {
                formProps.setFieldValue(
                  "profilePhoto",
                  event.currentTarget.files[0]
                );
              }}
            />
          </div>
          <button type="submit">Crear</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
