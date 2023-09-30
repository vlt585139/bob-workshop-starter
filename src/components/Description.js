import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Description() {
  return (
    <Box py={5}>
      <Typography variant="h6" gutterBottom>
        Om Meg
      </Typography>
      <Typography>Din beskrivelse her...</Typography>
    </Box>
  );
}

export default Description;
