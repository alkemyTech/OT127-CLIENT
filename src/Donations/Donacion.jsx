import React from "react";

const Donacion = ({ message }) => {
  const mercadoPagoCheckout = "https://mpago.la/1NKGewb";

  return (
    <div>
      {message && <p>{message}</p>}
      <a className="button-lg" href={mercadoPagoCheckout}>
        Mercado Pago
      </a>
    </div>
  );
};

export default Donacion;
