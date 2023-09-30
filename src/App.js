import * as React from "react";
import { Container } from "@mui/material";
import Profile from "./components/Profile";
import Description from "./components/Description";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Profile />
      <Description />
      <ContactForm />
    </Container>
  );
}
