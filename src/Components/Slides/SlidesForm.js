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
    file: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL();

  const formSchema = Yup.object({
    name: Yup.string().required("Este campo es obligatorio"),
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
          console.log(formData);

          resetForm();
        }}
      >
        {({ setFieldValue }) => (
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
            />
            <div>
              <img
                src={imagePreview}
                alt="preview"
                width="150px"
                height="auto"
              />
            </div>
            <ErrorMessage name="image" render={(msg) => <div>{msg}</div>} />

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

// <Formik
//   initialValues={{ name: "", order: "", image: "" }}
//   //validationSchema={() => ({})}
//   onSubmit={(values) => {
//     let formValues = {
//       name: values.name,
//       order: values.order,
//       image: values.file.name,
//     };
//     console.log(values);
//     setFormData({ ...formData, formValues });
//   }}
// >
//   {({ setFieldValue }) => (
//     <Form className="form-container">
//       <Field
//         className="input-field"
//         type="text"
//         name="name"
//         placeholder="Slide Title"
//       />
//       <ErrorMessage name="name" render={(msg) => <div>{msg}</div>} />
//       <CKEditor
//         id="description"
//         config={{
//           language: "es",
//         }}
//         data={description}
//         editor={ClassicEditor}
//         onChange={handleDescriptionState}
//       />
//       <Field
//         className="input-field"
//         type="number"
//         name="order"
//         onChange={(e) => {
//           setFieldValue("order", e.currentTarget.value);
//         }}
//         placeholder="ingrese un numero"
//       />
//       <Field
//         className="input-field"
//         type="file"
//         name="image"
//         onChange={(e) => {
//           setFieldValue("image", e.currentTarget.files[0]);
//         }}
//       />
//       <button className="submit-btn" type="submit">
//         Enviar
//       </button>
//     </Form>
//   )}
// </Formik>
