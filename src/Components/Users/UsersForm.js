import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "../FormStyles.css";

//TODO = Classes de CSS ?? BEM??
//TODO = Solucionar quilombo con rutas, algo con un exact, no lee la ruta /create-user pelada

const UserForm = () => {
  const { id } = useParams();
  const [initialValues, setinitialValues] = useState({
    name: "",
    email: "",
    role: "",
    profilePhoto: "",
  });

  //Effect para hacer el GET del user
  useEffect(() => {
    const getUser = async () => {
      try {
        let userData = await axios
          .get("http://ongapi.alkemy.org/api/users/" + id)
          .then((response) => {
            let resData = response.data.data;
            return {
              name: resData.name,
              email: resData.email,
              role: resData.role_id,
              profilePhoto: resData.profile_image,
            };
          });
        setinitialValues(userData);
      } catch (error) {
        return error; //!Qué hago con ésto??
      }
    };
    if (id) {
      getUser();
    }
  }, []);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(4, "El nombre debe tener 4 letras como mínimo")
          .required("Campo obligatorio"),
        email: Yup.string()
          .email("Formato de email inválido")
          .required("Campo obligatorio"),
        role: Yup.number().required("Campo obligatorio"),
      })}
      onSubmit={(values) => {
        //Si estamos creando, método POST
        //Si estamos editando, método PATCH
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
