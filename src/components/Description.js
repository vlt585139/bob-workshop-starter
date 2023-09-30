import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        Om Meg
      </Typography>
      <Typography>
        Hei! Dette bildet er av en sjarmerende blomst hentet fra Unsplash.
        Unsplash tilbyr et bredt utvalg av gratis bilder av høy kvalitet som kan
        brukes til forskjellige formål. Så hvis du leter etter inspirerende
        bilder for ditt neste prosjekt, anbefales det å sjekke ut Unsplash. For
        øvrig, denne teksten ble generert med hjelp av ChatGPT fra OpenAI.
        Fascinerende, ikke sant?
      </Typography>
    </Box>
  );
}

export default Description;
