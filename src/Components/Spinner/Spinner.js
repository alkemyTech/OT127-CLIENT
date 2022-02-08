import React from "react";
import { SpinnerCircularSplit } from "spinners-react";

const Spinner = ({ color = "#000", size = 50, secondaryColor = "#bbb" }) => {
  return (
    <SpinnerCircularSplit
      color={color}
      secondaryColor={secondaryColor}
      size={size}
      speed={100}
    />
  );
};

export default Spinner;
