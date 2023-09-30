import React from "react";
import { Avatar, Typography, Box } from "@mui/material";

function Profile() {
  return (
    <Box
      textAlign="center"
      py={5}
      bgcolor="#f5f5f5"
      borderRadius={3}
      boxShadow={3}
    >
      <Avatar
        src="/bilde-av-meg.jpg"
        alt="Kristian"
        sx={{
          width: 150,
          height: 150,
          margin: "auto",
          border: "4px solid #3f51b5",
        }}
      />
      <Typography variant="h4" gutterBottom color="#3f51b5">
        Kristian
      </Typography>
    </Box>
  );
}

export default Profile;
