import React from "react";

//TODO = Agregar estilos BEM

const Card = ({
  imgSrc = "https://via.placeholder.com/150",
  title,
  description,
}) => {
  return (
    <div>
      <img src={imgSrc} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
