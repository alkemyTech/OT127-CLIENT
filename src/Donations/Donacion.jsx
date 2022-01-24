import React from "react";

const Donacion = ({ message }) => {
  return (
    <div>
      {message && <p>{message}</p>}
      <button>MercadoPago</button>
    </div>
  );
};

export default Donacion;
