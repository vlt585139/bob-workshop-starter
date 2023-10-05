import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#c6c0ed" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        En morsom vits...
      </Typography>
      <Typography>
      "Why do fathers take an extra pair of socks when they go golfing?" "In case they get a hole in one!"
      </Typography>
    </Box>
  );
}

export default Description;
