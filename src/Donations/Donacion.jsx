import React from "react";

const Donacion = ({ message }) => {
  const mercadoPagoCheckout = "https://mpago.la/1NKGewb";

  return (
    <div className="donation__container">
      {message && <p>{message}</p>}
      <a className="donation__link" as="button" href={mercadoPagoCheckout}>
        <img
          className="donation__image"
          src={process.env.PUBLIC_URL + "/images/mercadopago-button.png"}
          alt="mercado pago"
          width="150"
        />
      </a>
    </div>
  );
};

export default Donacion;
