import React from "react";
import { Rings } from "react-loader-spinner";

const Spinner = ({ color, height, width }) => {
  //Cuando sea implementado, es importante revisar el color y el tamaño por posibles retoques
  return <Rings color={color} height={height} width={width} />;
};

export default Spinner;
