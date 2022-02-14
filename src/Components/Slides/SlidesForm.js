import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";

import { getSlidesData, getSlidesDataById, updateSlide, createNewSlide } from "../../Services/slidesApiService";

const SlidesForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
    order: 0,
    image: "",
  });
  const [ordersList, setOrdersList] = useState([]); // para validar order
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getOrdersList = async () => {
    await getSlidesData()
      .then((res) => {
        let data = res.data.data;
        // arreglo de order utilizados
        const orderBlackList = data
          .map((data) => data.order)
          .filter((order) => order !== initialValues.order);
        setOrdersList(orderBlackList);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getSlideById = async (id) => {
    setLoading(true);


    await getSlidesDataById(id)
      .then((res) => {
        if (res.data.success) {
          const { name, description, order, image } = res.data.data;
          setInitialValues({
            name: name,
            description: description,
            order: order ? order : 0,
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
      getSlideById(id);
    }
    // se obtiene un arreglo de orders ya usados
    getOrdersList();
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
      await updateSlide(formValues, id).catch((err) => {
        alert(err.message);
      });
    } else {
      await createNewSlide(formValues).catch((err) => {
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
              description: values.description,
              order: values.order,
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
                placeholder="Slide Title"
              />

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
              <label className="form__label" htmlFor="order">
                Numero de orden
              </label>
              <Field
                id="order"
                className="form__input"
                type="number"
                name="order"
                onChange={(e) => {
                  setFieldValue("order", parseInt(e.currentTarget.value));
                }}
                placeholder="ingrese un numero"
              />
              <ErrorMessage
                name="order"
                render={(msg) => <div className="form__error">{msg}</div>}
              />
              <label className="form__label" htmlFor="order">
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
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default SlidesForm;
