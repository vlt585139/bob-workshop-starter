import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Profile() {
  return (
    <Box textAlign="center" py={5}>
      <Avatar
        src="/path-to-placeholder-image.jpg"
        alt="Placeholder"
        sx={{ width: 128, height: 128, margin: "auto" }}
      />
      <Typography variant="h4" gutterBottom>
        Ditt navn her
      </Typography>
    </Box>
  );
}

export default Profile;
