import React from "react";

const Card = ({
  imgSrc = "https://via.placeholder.com/150?text=No+Image",
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
