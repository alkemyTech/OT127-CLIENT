import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";
import { useParams } from "react-router-dom";

const MemberForm = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    facebookUrl: "",
    linkedinUrl: "",
    image: "",
  });
  const baseUrl = "http://ongapi.alkemy.org/api/members";
  const inputFileRef = useRef();

  const handleSubmit = async (formValues) => {
    setLoading(true);
    if (id) {
      await axios
        .put(`${baseUrl}/${id}`, formValues, {
          headers: {
            Group: 127,
          },
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      await axios
        .post(baseUrl, formValues, {
          headers: {
            Group: 127,
          },
        })
        .then((res) => {
          setFormValues(res.data.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    setLoading(false);
  };

  const handleImage = (e, setFieldValue) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setFieldValue("image", reader.result);
    };
  };

  const getDataById = async (formValues) => {
    setLoading(true);
    await axios
      .get(`${baseUrl}/${id}`, {
        headers: {
          Group: 127,
        },
      })
      .then((res) => {
        setFormValues(res.data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getDataById(id);
    }
  }, []); //eslint-disable-line

  return (
    <div>
      {loading ? (
        <p>LOADING..</p>
      ) : (
        <Formik
          enableReinitialize={true}
          initialValues={formValues}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(4, "Debe tener por lo menos 4 caracteres.")
              .required("Campo obligatorio"),
            description: Yup.string().required("Campo obligatorio"),
            facebookUrl: Yup.string()
              .required("Campo obligatorio")
              .email("Formato invalido"),
            linkedinUrl: Yup.string()
              .required("Campo obligatorio")
              .email("Formato invalido"),
          })}
          onSubmit={({ resetForm }) => {
            handleSubmit();
          }}
        >
          {({ setFieldValue }) => (
            <Form className="form__container">
              <div className="form">
                {id ? <p className="form__title">Editar miembro</p> : <p className="form__title">Crear miembro nuevo</p>}
                <p className="form__subtitle">complete todos los campos</p>
                <label className="form__label" htmlFor="name">
                  Nombre
                </label>
                <Field name="name" type="text" className="form__input" />
                <ErrorMessage
                  name="name"
                  render={(msg) => <div className="form__error">{msg}</div>}
                />

                <label className="form__label" htmlFor="description">
                  Descripcion
                </label>
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
                  render={(msg) => <div className="form__error">{msg}</div>}
                />

                <label className="form__label" htmlFor="image">
                  Cargar Imagen
                </label>
                <input
                  name="image"
                  ref={inputFileRef}
                  type="file"
                  accept=".jpg, .png"
                  onChange={(e) => {
                    handleImage(e, setFieldValue);
                  }}
                />
                <ErrorMessage
                  name="image"
                  render={(msg) => <div className="form__error">{msg}</div>}
                />

                <label className="form__label" htmlFor="facebookUrl">
                  Facebook
                </label>
                <Field
                  name="facebookUrl"
                  type="text"
                  className="form__input"
                />
                <ErrorMessage
                  name="facebookUrl"
                  render={(msg) => <div className="form__error">{msg}</div>}
                />

                <label className="form__label" htmlFor="linkedinUrl">
                  LinkedIn
                </label>
                <Field
                  name="linkedinUrl"
                  type="text"
                  className="form__input"
                />
                <ErrorMessage
                  name="linkedinUrl"
                  render={(msg) => <div className="form__error">{msg}</div>}
                />

                <button className="form__button" type="submit">
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
export default MemberForm;
