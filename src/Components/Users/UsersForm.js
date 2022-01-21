import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../FormStyles.css";

const UserForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", role: "", profilePhoto: "" }}
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
        console.log(values);
      }}
    >
      {(formProps) => (
        <Form>
          <label htmlFor="name">First Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <Field name="role" as="select">
            <option value="administrador">Administrador</option>
            <option value="regular">Regular</option>
          </Field>
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
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
