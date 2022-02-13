import React from "react";

const Content = () => {
  return (
    <div className="content__container">
      <h2 className="content__date">
        25/02/2022 calle 123, barrio La Cava, Buenos Aires
      </h2>
      <img
        src={process.env.PUBLIC_URL + "/images/toys-campaign/juguete-1.jpg"}
        alt=""
        className="content__img"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/toys-campaign/niños-3.jpg"}
        alt=""
        className="content__img"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/toys-campaign/juguete-2.jpg"}
        alt=""
        className="content__img"
      />
      <p className="content__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
        similique consectetur, necessitatibus eaque maxime architecto earum
        neque. Sapiente perspiciatis eligendi, non a minima odio nihil velit
        vero incidunt iure eius.
      </p>
      <h3 className="content__countdown"></h3>
      <img
        src={process.env.PUBLIC_URL + "/images/toys-campaign/juguete-4.jpg"}
        alt=""
        className="content__img"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/toys-campaign/juguete-5.jpg"}
        alt=""
        className="content__img"
      />
    </div>
  );
};

export default Content;
