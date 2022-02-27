import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { putNews, postNews, getNewsByID } from "../../Services/newsService";
import { getAllCategory } from "../../Services/categoriesService";
import Spinner from "../Spinner/Spinner";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";

const NewsForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    content: "",
    category_id: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [dataCategorie, setDataCategorie] = useState([]);

  const { id } = useParams();
  const inputFileRef = useRef();

  const getCategorieData = () => {
    getAllCategory()
      .then((response) => {
        const dataCategorie = response.data;
        setDataCategorie(dataCategorie);
      })
      .catch((error) => {
        return error;
      });
  };

  const toDataURL = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

  const getNewsID = async (id) => {
    setLoading(true);
    getNewsByID(id).then((res) => {
      if (res.data.success) {
        const { name, content, image, category_id } = res.data.data;
        //Es necesario encodear la URL que viene de la API para que se pueda editar con exito.
        axios
          .get(image, { responseType: "blob" })
          .then((response) => toDataURL(response.data))
          .then((encoded) => {
            setInitialValues({
              name: name,
              content: content,
              image: encoded,
              category_id: category_id,
            });
          });
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getNewsID(id);
    }
    getCategorieData();
  }, []); //eslint-disable-line

  const toBase64 = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  const handleSubmit = async (formValues, { resetForm }) => {
    let { image, ...rest } = formValues;
    if (typeof image === "object") {
      image = await toBase64(image);
      formValues = {
        image,
        ...rest,
      };
    }

    if (id) {
      putNews(id, formValues);
    } else {
      postNews(formValues);
      resetForm();
      inputFileRef.current.value = "";
    }
  };

  const validations = Yup.object({
    name: Yup.string()
      .min(4, "Debe tener al menos 4 caracteres")
      .required("Este campo es obligatorio"),
    content: Yup.string().required("Este campo es obligatorio"),
    image: Yup.string().required("Este campo es obligatorio"),
    category_id: Yup.string().required("Este campo es obligatorio"),
  });

  return (
    <div className="form__container">
      {loading ? (
        <Spinner />
      ) : (
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validations}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="form">
              {id ? <p className="form__title">Editar novedad</p> : <p className="form__title">Crear novedad</p>}
              <p className="form__subtitle">complete todos los campos</p>
              <label className="form__label" htmlFor="name">
                Titulo
              </label>
              <Field
                id="name"
                className="form__input"
                type="text"
                name="name"
                placeholder="titulo"
              />
              <ErrorMessage
                name="name"
                render={(msg) => <div className="form__error">{msg}</div>}
              />

              <label className="form__label" htmlFor="content">
                Contenido
              </label>
              <Field name="content">
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
                name="content"
                render={(msg) => <div className="form__error">{msg}</div>}
              />

              <label className="form__label" htmlFor="category_id">
                Categorias
              </label>
              <Field
                className="form__input"
                component="select"
                as="select"
                name="category_id"
                type="category_id"
              >
                <option value="">--- Seleccionar ---</option>
                {dataCategorie.map((element) => {
                  return (
                    <option
                      className="form__option"
                      key={element.id}
                      value={element.id}
                    >
                      {element.name}
                    </option>
                  );
                })}
              </Field>
              <ErrorMessage
                name="category_id"
                render={(msg) => <div className="form__error">{msg}</div>}
              />

              <label className="form__label" htmlFor="category_id">
                Cargar Imagen
              </label>
              <input
                ref={inputFileRef}
                type="file"
                onChange={(e) => {
                  setFieldValue("image", e.currentTarget.files[0]);
                }}
                accept=".jpg, .png"
              />
              <ErrorMessage
                name="image"
                render={(msg) => <div className="form__error">{msg}</div>}
              />
              <button type="submit" className="form__button">
                {id ? "Editar" : "Crear"}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default NewsForm;
