import React from "react";

const Donacion = ({ title }) => {
  const mercadoPagoCheckout = "https://mpago.la/1NKGewb";
  const userData = JSON.parse(localStorage.getItem("authenticatedUser"));
  const redirectAdmin = () => {
    window.location.href = "/backoffice";
  };
  return (
    <div className="donation__container">
      {userData.name === "Admin" ? (
        redirectAdmin()
      ) : (
        <>
          {title && <p>{title}</p>}
          <a className="donation__link" as="button" href={mercadoPagoCheckout}>
            <img
              className="donation__image"
              src={process.env.PUBLIC_URL + "/images/mercadopago-button.png"}
              alt="mercado pago"
            />
          </a>
        </>
      )}
    </div>
  );
};

export default Donacion;
