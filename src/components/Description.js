import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#c6c0ed" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography vvariant="body1" color="inherit">
        Om Oss!
      </Typography>
      <Typography> 
      Startup firma som spesialiserer oss innen web-produkter og tjenester !
       
      </Typography>
    </Box>
  );
}

export default Description;
