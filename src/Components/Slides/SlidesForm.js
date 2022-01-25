import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";

import axios from "axios";

import "../FormStyles.css";

const SlidesForm = () => {
  const [initialValues, setInitialValues] = useState(null);
  const [slidesData, setSlidesData] = useState([]); // para validar order
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getSlidesData = async () => {
      const url = "http://ongapi.alkemy.org/api/slides";

      await axios
        .get(url)
        .then((res) => {
          const {
            data: { data },
          } = res;
          setSlidesData(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    getSlidesData();
  }, []);
  console.log(slidesData);

  useEffect(() => {
    const getSlidesById = async () => {
      if (id) {
        setLoading(true);
        const url = `http://ongapi.alkemy.org/api/slides/${id}`;
        await axios
          .get(url)
          .then((res) => {
            const { data: status } = res;
            if (status.success) {
              const { data } = status;
              setInitialValues({
                name: data.name,
                description: data.description,
                order: data.order ? data.order : "",
                image: data.image,
              });
            } else {
              alert(status.message);
            }
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      setLoading(false);
    };
    getSlidesById();
  }, [id]);

  const handleSubmit = async (formValues) => {
    if (id) {
      const url = `http://ongapi.alkemy.org/api/slides/${id}`;
      await axios
        .put(url, {
          name: formValues.name,
          description: formValues.description,
          order: formValues.order,
        })
        .catch((err) => {
          alert(err.message);
        });
    } else if (!id) {
      const url = "http://ongapi.alkemy.org/api/slides";

      await axios
        .post(url, {
          name: formValues.name,
          description: formValues.description,
          order: formValues.order,
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const inputFileRef = useRef();

  const validations = Yup.object({
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
      {loading ? (
        <p>LOADING...</p>
      ) : (
        <Formik
          initialValues={{
            name: initialValues ? initialValues.name : "",
            description: initialValues ? initialValues.description : "",
            order: initialValues ? initialValues.order : "",
            image: initialValues ? initialValues.image : "",
          }}
          validationSchema={validations}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            let formValues = {
              name: values.name,
              description: values.description,
              order: values.order,
              image: values.image.name,
            };
            setInitialValues(null);
            handleSubmit(formValues);
            inputFileRef.current.value = "";
            resetForm({
              values: {
                name: "",
                description: "",
                order: "",
                image: "",
              },
            });
          }}
        >
          {({ setFieldValue }) => (
            <Form className="form-container">
              <label htmlFor="name">Titulo</label>
              <Field
                id="name"
                className="input-field"
                type="text"
                name="name"
                placeholder="Slide Title"
              />

              <ErrorMessage name="name" render={(msg) => <div>{msg}</div>} />
              <label htmlFor="description">Descripcion</label>
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
              <label htmlFor="order">Numero de orden</label>
              <Field
                id="order"
                className="input-field"
                type="number"
                name="order"
                onChange={(e) => {
                  setFieldValue("order", parseInt(e.currentTarget.value));
                }}
                placeholder="ingrese un numero"
              />
              {error && <p>El numero de orden ya esta siendo usado</p>}
              <ErrorMessage name="order" render={(msg) => <div>{msg}</div>} />
              <label htmlFor="order">Cargar Imagen</label>
              <input
                ref={inputFileRef}
                className="input-field"
                type="file"
                onChange={(e) => {
                  setFieldValue("image", e.currentTarget.files[0]);
                }}
                accept=".jpg, .png"
              />
              <ErrorMessage name="image" render={(msg) => <div>{msg}</div>} />
              <button type="submit" className="submit-btn">
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default SlidesForm;
