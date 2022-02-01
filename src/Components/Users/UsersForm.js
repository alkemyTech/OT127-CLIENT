import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "../FormStyles.css";

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
    <div className="body">
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
          <Form className="body__form">
            <div className="body__form--subcontainer">
              <label htmlFor="name" className="body__form--label">
                Nombre
              </label>
              <Field className="body__form--input" name="name" type="text" />
              <ErrorMessage
                name="name"
                render={(msg) => <div className="body__form--error">{msg}</div>}
                className="body__form--error"
              />
            </div>
            <div className="body__form--subcontainer">
              <label htmlFor="email" className="body__form--label">
                Email
              </label>
              <Field className="body__form--input" name="email" type="email" />
              <ErrorMessage
                name="email"
                render={(msg) => <div className="body__form--error">{msg}</div>}
                className="body__form--error"
              />
            </div>
            <div className="body__form--subcontainer">
              <label htmlFor="name" className="body__form--label">
                Rol
              </label>
              <Field className="body__form--input" name="role" as="select">
                {roles.map((item) => {
                  return (
                    <option
                      className="body__form--option"
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
                render={(msg) => <div className="body__form--error">{msg}</div>}
                className="body__form--error"
              />
            </div>
            <div className="body__form--subcontainer">
              <label htmlFor="password" className="body__form--label">
                Contraseña
              </label>
              <Field
                className="body__form--input"
                name="password"
                type="password"
              ></Field>
              <ErrorMessage
                name="password"
                render={(msg) => <div className="body__form--error">{msg}</div>}
                className="body__form--error"
              />
            </div>
            <div className="body__form--subcontainer">
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
                render={(msg) => <div className="body__form--error">{msg}</div>}
                className="body__form--error"
              />
            </div>
            <button className="body__form--submit" type="submit">
              {id ? "Guardar" : "Crear"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
