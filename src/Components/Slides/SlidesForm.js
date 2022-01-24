import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";

import "../FormStyles.css";

const SlidesForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    order: "",
    image: "",
  });
  const [preview, setPreview] = useState(null);

  const imagePreview = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const formSchema = Yup.object({
    name: Yup.string()
      .min(4, "Debe tener al menos 4 caracteres")
      .required("Este campo es obligatorio"),
    description: Yup.string().required("Este campo es obligatorio"),
    order: Yup.number()
      .moreThan(-1, "Debe ser un numero mayor o igual a cero")
      .required("Este campo es obligatorio")
      .integer(),
    image: Yup.string().required("Este campo es obligatorio"),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          description: "",
          order: "",
          image: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          let formValues = {
            name: values.name,
            description: values.description,
            order: values.order,
            image: values.image.name,
          };

          setFormData({ ...formData, ...formValues });

          setPreview(null);
          resetForm();
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="form-container">
            <Field
              className="input-field"
              type="text"
              name="name"
              placeholder="Slide Title"
            />

            <ErrorMessage name="name" render={(msg) => <div>{msg}</div>} />

            <Field name="description">
              {({ field }) => (
                <>
                  <CKEditor
                    config={{
                      language: "es",
                    }}
                    editor={ClassicEditor}
                    data={field.value}
                    onChange={(event, editor) => {
                      setFieldValue(field.name, editor.getData());
                    }}
                  />
                </>
              )}
            </Field>

            <ErrorMessage
              name="description"
              render={(msg) => <div>{msg}</div>}
            />
            <Field
              className="input-field"
              type="number"
              name="order"
              onChange={(e) => {
                setFieldValue("order", e.currentTarget.value);
              }}
              placeholder="ingrese un numero"
            />

            <ErrorMessage name="order" render={(msg) => <div>{msg}</div>} />

            <input
              className="input-field"
              type="file"
              onChange={(e) => {
                setFieldValue("image", e.currentTarget.files[0]);
              }}
              accept=".jpg, .png"
            />
            <ErrorMessage name="image" render={(msg) => <div>{msg}</div>} />
            {values.image && imagePreview(values.image)}
            <div>
              {preview && (
                <img src={preview} alt="preview" width="150px" height="auto" />
              )}
            </div>

            <button type="submit" className="submit-btn">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SlidesForm;
