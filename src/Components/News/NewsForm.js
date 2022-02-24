import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";
import axios from "axios";
import { sweetAlertError } from "../../Services/sweetAlertServices";

const NewsForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    contenido: "",
    categorie: "",
    image: "",
  });
  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataCategorie, setDataCategorie] = useState([]);

  const { id } = useParams();
  const url = "http://ongapi.alkemy.org/api/news";
  const urlCategories = "http://ongapi.alkemy.org/api/categories";
  const config ={
    headers: {
      Group: 127,
    },
  }

  const getCategorieData = () => {
    if (id) {
      axios
        .get(urlCategories, config)
        .then((response) => {
          const dataCategorie = response.data.data;
          setDataCategorie(dataCategorie);
        })
        .catch((error) => {
          return error;
        });
    }
  };

  const getOrdersList = async () => {
    await axios
      .get(url, config)
      .then((res) => {
        let data = res.data.data;
        const orderBlackList = data
          .map((data) => data.order)
          .filter((order) => order !== initialValues.order);
        setOrdersList(orderBlackList);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getDataID = async (id) => {
    setLoading(true);

    await axios
      .get(`${url}/${id}`, config)
      .then((res) => {
        if (res.data.success) {
          const { name, contenido, image } = res.data.data;
          setInitialValues({
            name: name,
            contenido: contenido,
            image: image,
            id: true,
          });
        } else {
          const { status } = res.data;
          alert(status.message);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getDataID(id);
    }
    getOrdersList();
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
      await axios.put(`${url}/${id}`, formValues, config).catch((err) => {
        sweetAlertError("No se pudo actualizar esta novedad.");
      });
    } else {
      await axios.post(url, formValues, config).catch((err) => {
        sweetAlertError("No se pudo crear esta novedad.");
      });
    }
  };

  const inputFileRef = useRef();

  const validations = Yup.object({
    name: Yup.string()
      .min(4, "Debe tener al menos 4 caracteres")
      .required("Este campo es obligatorio"),
    contenido: Yup.string().required("Este campo es obligatorio"),
    id: Yup.boolean(),
    order: Yup.number()
      .moreThan(0, "Debe ser un numero mayor o igual a cero")
      .required("Este campo es obligatorio")
      .integer()
      .notOneOf(ordersList, "Numero de orden ya esta en uso"),
    image: Yup.string().required("Este campo es obligatorio"),
  });

  return (
    <div className="form__container">
      {loading ? (
        <p>LOADING...</p>
      ) : (
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validations}
          onSubmit={async (values, { resetForm }) => {
            let formValues = {
              name: values.name,
              contenido: values.contenido,
              categorie: values.categorie,
              image: values.image,
            };
            await handleSubmit(formValues);
            // limpio el input file
            inputFileRef.current.value = "";

            resetForm();
          }}
        >
          {({ setFieldValue }) => (
            <Form className="form">
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

              <label className="form__label" htmlFor="contenido">
                Contenido
              </label>
              <Field name="contenido">
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
                name="contenido"
                render={(msg) => <div className="form__error">{msg}</div>}
              />

              <label className="form__label" htmlFor="categorie">
                Categorias
              </label>
              <Field
                className="form__input"
                component="select"
                as="select"
                name="categorie"
                type="categorie"
              >
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
                name="categorie"
                render={(msg) => <div className="form__error">{msg}</div>}
              />

              <label className="form__label" htmlFor="categorie">
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
              <ErrorMessage name="image" render={(msg) => <div className="form__error">{msg}</div>} />

              <button type="submit" className="form__button">
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default NewsForm;
