import React from "react";

const Gracias = () => {
  return (
    <div className="tanks__container">
      <h1 className="thanks_Xtitle">Muchas Gracias por tu Ayuda!!</h1>
      <div className="thanks__content">
        <img src={process.env.PUBLIC_URL + "/images/happy-kid.png"} alt="kid" />
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
