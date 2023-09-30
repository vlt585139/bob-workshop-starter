import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function ContactForm() {
  return (
    <Box py={5}>
      <Typography variant="h6" gutterBottom>
        Kontakt meg
      </Typography>
      <form>
        <Box mb={2}>
          <TextField fullWidth label="Navn" variant="outlined" />
        </Box>
        <Box mb={2}>
          <TextField fullWidth label="E-post" variant="outlined" />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Melding"
            variant="outlined"
            multiline
            rows={4}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
}

export default ContactForm;
