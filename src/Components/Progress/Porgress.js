import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const Progress = ({ color = "#1e3a8a" }) => {
  return (
    <Stack sx={{ width: "100%", color: { color } }}>
      <LinearProgress color="inherit" />
    </Stack>
  );
};

export default Progress;
