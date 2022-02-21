import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Gracias = () => {
  const history = useHistory();
  const isLogged = useSelector((state) => state.authReducer.userIsLogged);

  useEffect(() => {
    if (!isLogged) {
      history.push("/");
    }
  }, []); //eslint-disable-line
  return (
    <div className="thanks__container">
      <div className="thanks__content">
        <h1 className="thanks__title">Muchas Gracias por tu Ayuda!!</h1>
        <p className="thanks__text">
          Mediante nuestros programas educativos, buscamos incrementar la
          capacidad intelectual, moral y afectiva de las personas de acuerdo con
          la cultura y las normas de convivencia de la sociedad a la que
          pertenecen.
        </p>
      </div>
    </div>
  );
};

export default Gracias;
