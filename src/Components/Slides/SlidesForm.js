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

  const { id } = useParams();
  const url = "http://ongapi.alkemy.org/api/slides";

  const getSlidesData = async () => {
    await axios
      .get(url)
      .then((res) => {
        setSlidesData(res.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const orderUnique = slidesData.map((data) => data.order);
  const getSlidesById = async (id) => {
    setLoading(true);

    await axios
      .get(`${url}/${id}`)
      .then((res) => {
        if (res.data.success) {
          setInitialValues({
            name: res.data.data.name,
            description: res.data.data.description,
            order: res.data.data.order ? res.data.data.order : 0,
            image: res.data.data.image,
          });
        } else {
          alert(res.data.status.message);
        }
      })
      .catch((err) => {
        alert(err.message);
      });

    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getSlidesById(id);
    }
    getSlidesData();
  }, []); // eslint-disable-line

  const toBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  const handleSubmit = async (formValues) => {
    let { image, ...rest } = formValues;
    if (typeof image === "object") {
      image = await toBase64(image);
      formValues = {
        image,
        ...rest,
      };
    }

    if (id) {
      await axios
        .put(`${url}/${id}`, {
          name: formValues.name,
          description: formValues.description,
          order: formValues.order,
          image: formValues.image,
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      await axios
        .post(url, {
          name: formValues.name,
          description: formValues.description,
          order: formValues.order,
          image: formValues.image,
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
    order: Yup.number("debe ser un numero")
      .moreThan(0, "Debe ser un numero mayor o igual a cero")
      .required("Este campo es obligatorio")
      .integer()
      .notOneOf(orderUnique, "Numero de orden ya esta en uso"),
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
          onSubmit={async (values, { resetForm }) => {
            let formValues = {
              name: values.name,
              description: values.description,
              order: values.order,
              image: values.image,
            };
            await handleSubmit(formValues);
            setInitialValues(null);
            // limpio el input file
            inputFileRef.current.value = "";

            resetForm({
              values: {
                name: "",
                description: "",
                order: "",
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
