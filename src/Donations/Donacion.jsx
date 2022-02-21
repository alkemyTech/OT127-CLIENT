import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Donacion = ({ title }) => {
  const mercadoPagoCheckout = "https://mpago.la/1NKGewb";
  const history = useHistory();
  const isLogged = useSelector((state) => state.authReducer.userIsLogged);

  useEffect(() => {
    if (!isLogged) {
      history.push("/");
    }
  }, []); //eslint-disable-line

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
