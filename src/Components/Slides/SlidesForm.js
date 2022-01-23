import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";

import "../FormStyles.css";

const SlidesForm = () => {
  const [slidesData, setSlidesData] = useState({
    name: "",
    description: "",
    order: "",
    image: "",
  });

  const { name, description, order, image } = slidesData;

  const handleChange = (e) => {
    // if (e.target.name === "name") {
    //   setInitialValues({ ...initialValues, name: e.target.value });
    // }
    // if (e.target.name === "description") {
    //   setInitialValues({ ...initialValues, description: e.target.value });
    // }
  };
  const handleDescriptionState = (event, editor) => {
    const data = editor.getData();
    setSlidesData({ ...slidesData, description: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(slidesData);
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", order: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Este campo es obligatorio"),
          oder: Yup.number().required().positive().integer(),
        })}
        onSubmit={(values) => {
          let loginUser = {
            name: values.email,
            order: values.password,
          };
          setSlidesData([...slidesData, loginUser]);
        }}
      >
        <Form className="form-container">
          <Field
            className="input-field"
            type="text"
            name="name"
            placeholder="Slide Title"
          />
          <CKEditor
            id="description"
            config={{
              language: "es",
            }}
            data={description}
            editor={ClassicEditor}
            onChange={handleDescriptionState}
          />
          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </>
  );
};

export default SlidesForm;
