import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const Progress = ({
  primaryColor = "#2563eb",
  backgroundColor = "#93c5fd",
  height,
  borderRadius,
}) => {
  const CustomLinearProgress = styled(LinearProgress)(() => ({
    height: height,
    borderRadius: borderRadius,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: backgroundColor,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: borderRadius,
      backgroundColor: primaryColor,
    },
  }));
  return <CustomLinearProgress />;
};

export default Progress;
