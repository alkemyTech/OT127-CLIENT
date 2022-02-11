import React from "react";

const Donacion = ({ message }) => {
  const mercadoPagoCheckout = "https://mpago.la/1NKGewb";

  return (
    <div>
      {message && <p>{message}</p>}
      <a as="button" href={mercadoPagoCheckout}>
        <img
          src={process.env.PUBLIC_URL + "/images/mercadopago-button.png"}
          alt="mercado pago"
          width="100"
        />
      </a>
    </div>
  );
};

export default Donacion;
