import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// El componente acepta los atributos comunes de una <img> (src, alt)
// También acepta width y height (number, no string)
// y placeholder (componente que se va a mostrar mientras se carga la imagen)

const ImageLazyLoad = ({
  src,
  alt,
  height,
  width,
  placeholder = "https://via.placeholder.com/150",
  className,
}) => {
  return (
    <>
      <LazyLoadImage
        className={className}
        src={src}
        alt={alt}
        height={height}
        width={width}
        placeholderSrc={placeholder}
        effect="opacity"
      />
    </>
  );
};

export default ImageLazyLoad;
