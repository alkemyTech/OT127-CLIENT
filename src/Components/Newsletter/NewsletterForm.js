import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const NewsletterForm = () => {
  const [email, setEmail] = useState({
    email: "",
  });
  const [userFeedback, setUserFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const token = localStorage.getItem("TOKEN");
  const userSubscribed = localStorage.getItem("newsletter");

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
          if (!token) {
            setUserFeedback("Por favor inicia sesión o registrate");
            setShowFeedback(true);
            setTimeout(() => {
              setShowFeedback(false);
              setUserFeedback("");
            }, 2000);
          } else {
            if (userSubscribed) {
              setUserFeedback("Ya te habías suscripto");
              setShowFeedback(true);
              setTimeout(() => {
                setShowFeedback(false);
                setUserFeedback("");
              }, 2000);
            } else {
              localStorage.setItem(
                "newsletter",
                JSON.stringify(userNewsletterSubscribed)
              );
            }
          }

          resetForm();
        }}
      >
        <div className="container">
          <div className="newsletter__wrapper">
            <div>
              <ErrorMessage
                name="email"
                render={(msg) => <div className="newsletter__error">{msg}</div>}
              />
              {showFeedback && (
                <p className="newsletter__error">{userFeedback}</p>
              )}
            </div>
            <Form className="newsletter__form">
              <Field
                className="newsletter__add-email"
                type="email"
                name="email"
                id="email"
                placeholder="Suscribete al newsletter"
              />
              <button className="newsletter__submit-button" type="submit">
                Suscribirse
              </button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default NewsletterForm;
