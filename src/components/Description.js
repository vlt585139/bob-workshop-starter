import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Om Meg
      </Typography>
      <Typography>
        Hei! Jeg er et bilde av en blomst som Kristian fant på internett. Jeg er
        ikke en veldig spesiell blomst, men heller det første bilde Kristian
        kommer over på unsplash.com....
      </Typography>
    </Box>
  );
}

export default Description;
