import React, { useState } from "react";
import "../../sass/components/newsletter.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const NewsletterForm = () => {
  const [email, setEmail] = useState({
    email: "",
  });
  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Ingresa un email valido")
            .required("Ingrese un email"),
        })}
        onSubmit={(values, { resetForm }) => {
          const userNewsletterSubscribed = "active";
          setEmail({
            email: values.email,
          });

          localStorage.setItem(
            "newsletter",
            JSON.stringify(userNewsletterSubscribed)
          );
          resetForm();
        }}
      >
        <div className="container">
          <div className="newsletter__wrapper">
            <div>
              <ErrorMessage
                name="email"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div className="newsletter__main-content">
              <Form className="newsletter__subscription">
                <Field
                  className="newsletter__add-email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ingresa tu email"
                />
                <button className="newsletter__submit-button" type="submit">
                  Suscribirse
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default NewsletterForm;
