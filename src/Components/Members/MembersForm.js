import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {
  getMemberById,
  postMember,
  putMember,
} from "../../Services/membersService";
import Progress from "../Progress/Progress";

const MemberForm = () => {
  const { id } = useParams();

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    facebookUrl: "",
    linkedinUrl: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  const inputFileRef = useRef();

  const send_image = (files) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  const getDataById = async () => {
    const response = await getMemberById(id);
    const data = response.data.data;
    setFormValues({
      name: data.name,
      description: data.description,
      facebookUrl: data.facebookUrl,
      linkedinUrl: data.linkedinUrl,
      image: data.image,
    });
  };

  useEffect(() => {
    if (id) {
      getDataById(id);
    }
  }, []); //eslint-disable-line

  const handleSubmit = async (formValues, resetForm) => {
    setLoading(true);
    let { image, ...rest } = formValues;
    if (typeof image === "object") {
      image = await send_image(image);
      formValues = {
        image,
        ...rest,
      };
    } else {
      formValues = {
        ...rest,
      };
    }

    if (id) {
      await putMember(id, formValues);
      getDataById();
    } else {
      await postMember(formValues);
    }

    inputFileRef.current.value = "";
    resetForm();
    setLoading(false);
  };
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={formValues}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(4, "Debe tener por lo menos 4 caracteres.")
            .required("Campo obligatorio"),
          description: Yup.string().required("Campo obligatorio"),
          image: Yup.string().required("Este campo es obligatorio"),
          facebookUrl: Yup.string()
            .required("Campo obligatorio")
            .url("Formato invalido"),
          linkedinUrl: Yup.string()
            .required("Campo obligatorio")
            .url("Formato invalido"),
        })}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="form__container">
            <div className="form">
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
                {id ? "Cambiar Imagen" : "Cargar Imagen"}
              </label>
              <input
                name="image"
                ref={inputFileRef}
                type="file"
                accept=".jpg, .png"
                onChange={(e) => {
                  setFieldValue("image", e.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                name="image"
                render={(msg) => <div className="form__error">{msg}</div>}
              />

              <label className="form__label" htmlFor="facebookUrl">
                Facebook
              </label>
              <Field name="facebookUrl" type="text" className="form__input" />
              <ErrorMessage
                name="facebookUrl"
                render={(msg) => <div className="form__error">{msg}</div>}
              />

              <label className="form__label" htmlFor="linkedinUrl">
                LinkedIn
              </label>
              <Field name="linkedinUrl" type="text" className="form__input" />
              <ErrorMessage
                name="linkedinUrl"
                render={(msg) => <div className="form__error">{msg}</div>}
              />

              <button className="form__button" type="submit">
                {id ? "Editar" : "Crear"}
              </button>
              {loading && (
                <Progress primaryColor="#1c4937" backgroundColor="#6ee7b7" />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default MemberForm;
