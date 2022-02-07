import React from "react";
import { TailSpin } from "react-loader-spinner";

const Spinner = ({ color = "#000", height = 100, width = 100 }) => {
  //Cuando sea implementado, es importante revisar el color y el tamaño por posibles retoques
  return <TailSpin color={color} height={height} width={width} />;
};

export default Spinner;
