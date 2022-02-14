import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const UserForm = () => {
  const { id } = useParams();
  const [initialValues, setinitialValues] = useState({
    name: "",
    email: "",
    role: "",
    profilePhoto: "",
    password: "",
  });
  const [roles, setRoles] = useState([]);

  const urlUsers = "http://ongapi.alkemy.org/api/users";
  const urlRoles = "http://ongapi.alkemy.org/api/roles";

  const getUser = async () => {
    try {
      let userData = await axios.get(`${urlUsers}/${id}`).then((response) => {
        let resData = response.data.data;
        return {
          name: resData.name,
          email: resData.email,
          role: resData.role_id,
          profilePhoto: resData.profile_image,
          password: resData.password,
        };
      });
      setinitialValues(userData);
    } catch (error) {
      //TODO
    }
  };

  const getRoles = async () => {
    try {
      let rolesData = await axios.get(urlRoles).then((response) => {
        let resData = response.data.data;
        let arrData = [];
        resData.forEach((element) => {
          arrData.push({ id: element.id, name: element.name });
        });
        return arrData;
      });
      setRoles(rolesData);
    } catch (error) {
      //TODO
    }
  };

  const handleSubmit = (values) => {
    id
      ? axios.put(`${urlUsers}/${id}`, values).catch((error) => {
        //TODO
      })
      : axios.post(urlUsers, values).catch((error) => {
        //TODO
      });
  };

  const handleChange = (e, setFieldValue) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setFieldValue("profilePhoto", reader.result);
    };
  };

  //Effect para hacer el GET del user y roles
  useEffect(() => {
    getRoles();
    if (id) {
      getUser();
    }
  }, []); //eslint-disable-line

  return (
    <div className="form__container">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(4, "El nombre debe tener 4 letras como mínimo")
            .required("Campo obligatorio"),
          email: Yup.string()
            .email("Formato de email inválido")
            .required("Campo obligatorio"),
          role: Yup.number().required("Campo obligatorio"),
          password: Yup.string()
            .min(6, "La contraseña debe tener 6 caracteres como mínimo.")
            .matches(
              /^(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/,
              "Formato de contraseña inválida. Debe contener al menos: una letra minúscula, un número y un símbolo."
            )
            .required("Ingresá una contraseña"),
        })}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="form">
            <div className="form__subcontainer">
              <label htmlFor="name" className="form__label">
                Nombre
              </label>
              <Field className="form__input" name="name" type="text" />
              <ErrorMessage
                name="name"
                render={(msg) => <div className="form__error">{msg}</div>}
              />
            </div>
            <div className="form__subcontainer">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <Field className="form__input" name="email" type="email" />
              <ErrorMessage
                name="email"
                render={(msg) => <div className="form__error">{msg}</div>}
              />
            </div>
            <div className="form__subcontainer">
              <label htmlFor="name" className="form__label">
                Rol
              </label>
              <Field className="form__input" name="role" as="select">
                {roles.map((item) => {
                  return (
                    <option
                      className="form__option"
                      value={item.id}
                      key={item.id}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </Field>
              <ErrorMessage
                name="role"
                render={(msg) => <div className="form__error">{msg}</div>}
              />
            </div>
            <div className="form__subcontainer">
              <label htmlFor="password" className="form__label">
                Contraseña
              </label>
              <Field
                className="form__input"
                name="password"
                type="password"
              ></Field>
              <ErrorMessage
                name="password"
                render={(msg) => <div className="form__error">{msg}</div>}
              />
            </div>
            <div className="form__subcontainer">
              <input
                type="file"
                name="profilePhoto"
                accept=".png, .jpg"
                onChange={(e) => {
                  handleChange(e, setFieldValue);
                }}
              />
              <ErrorMessage
                name="profilePhoto"
                render={(msg) => <div className="form__error">{msg}</div>}
              />
            </div>
            <button className="form__button" type="submit">
              {id ? "Guardar" : "Crear"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
