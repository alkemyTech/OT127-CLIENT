import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
