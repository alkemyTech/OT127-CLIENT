import React, { useState } from "react";

const NewsletterForm = () => {
  const [newsletter, setNewsletter] = useState({
    email: "",
    subscribed: null,
  });

  const { email } = newsletter;

  const handleChange = ({ target }) => {
    setNewsletter({
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hola Submit");
  };

  return (
    <div className="container">
      <div className="newsletter__main-content">
        <form className="newsletter__subscription" onSubmit={handleSubmit}>
          <label htmlFor="email">Newsletter</label>
          <input
            className="newsletter__add-email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
          />
          <button className="newsletter__submit-button" type="submit">
            <span className="newsletter__submit-before">Suscribirse</span>
            <span className="newsletter__submit-after">
              Gracias por suscribirse!
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
