import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  IconButton,
  Stack,
} from "@mui/material";
import { Star, Build } from "@mui/icons-material";

function Homepage() {
  return (
    <Container>
      <Box
        mt={5}
        mb={5}
        textAlign="center"
        style={{
          backgroundColor: "#e3f2fd",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          BOB BBL Workshop 🚀
        </Typography>
        <Typography variant="subtitle1">
          Bli med oss og lær hvordan du bygger moderne nettsider med React og
          MUI.
        </Typography>
      </Box>

      <Stack direction="column" spacing={3}>
        <Paper
          elevation={3}
          style={{ padding: "20px", backgroundColor: "#ffebee" }}
        >
          <IconButton color="primary" style={{ marginBottom: "10px" }}>
            <Star fontSize="large" />
          </IconButton>
          <Typography variant="h6" gutterBottom>
            Trinn 1: Introduksjon
          </Typography>
          <Typography>Få en rask innføring i webutvikling og React.</Typography>
        </Paper>

        <Paper
          elevation={3}
          style={{ padding: "20px", backgroundColor: "#e1bee7" }}
        >
          <IconButton color="secondary" style={{ marginBottom: "10px" }}>
            <Build fontSize="large" />
          </IconButton>
          <Typography variant="h6" gutterBottom>
            Trinn 2: Bygg med MUI
          </Typography>
          <Typography>
            Oppdag hvordan MUI kan forbedre din utviklingsprosess.
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          style={{ padding: "20px", backgroundColor: "#e0f7fa" }}
        >
          <Typography variant="h6" gutterBottom>
            Trinn 3: Publiser!
          </Typography>
          <Typography>Gjør nettsiden din tilgjengelig for alle.</Typography>
        </Paper>
      </Stack>

      <Box mt={5} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Star />}
        >
          Start Workshop
        </Button>
      </Box>
    </Container>
  );
}

export default Homepage;
