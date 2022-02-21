import React from "react";

const Donacion = ({ title }) => {
  const mercadoPagoCheckout = "https://mpago.la/1NKGewb";

  return (
    <div className="donation__container">
      {title && <p>{title}</p>}
      <a className="donation__link" as="button" href={mercadoPagoCheckout}>
        <img
          className="donation__image"
          src={process.env.PUBLIC_URL + "/images/mercadopago-button.png"}
          alt="mercado pago"
        />
      </a>
    </div>
  );
};

export default Donacion;
