import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// El componente acepta los atributos comunes de una <img> (src, alt)
// También acepta width y height (number, no string)
// y placeholder (componente que se va a mostrar mientras se carga la imagen)

const ImageLazyLoad = ({ src, alt, height, width, placeholder }) => {
  return (
    <>
      <LazyLoadImage
        src={src}
        alt={alt}
        height={height}
        width={width}
        placeholder={placeholder}
        effect="opacity"
      />
    </>
  );
};

export default ImageLazyLoad;
