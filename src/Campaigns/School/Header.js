import React from "react";
import ImageLazyLoad from "../../Components/Image/ImageLazyLoad";

const Header = () => {
  return (
    <header>
      <ImageLazyLoad src="https://placeimg/640/480/any" alt="Texto alt 1" />
      <ImageLazyLoad src="https://placeimg/640/480/any" alt="Texto alt 1" />
      <ImageLazyLoad src="https://placeimg/640/480/any" alt="Texto alt 1" />
    </header>
  );
};

export default Header;
