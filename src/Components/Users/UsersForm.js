import React from "react";
import { Formik, Field, Form, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";
import "../FormStyles.css";
import { findByPlaceholderText } from "@testing-library/react";

const UserForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", role: "", profilePhoto: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        role: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, formikBag) => {
        console.log(values);
      }}
    >
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
          // onChange={(event) => {
          //   setFieldValue("profilePhoto", event.currentTarget.files[0]);
          // }}
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
