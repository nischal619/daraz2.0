import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack, Typography, IconButton, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#1976d2",
          position: "fixed",
          width: "100%",
          bottom: "0",
        }}
      >
        <Stack spacing={1} direction="row" p={2}>
          <Typography variant="body1" color="whitesmoke">
            Copyright Daraz2.0 2022
          </Typography>
          <Typography paddingLeft={2} variant="body2" color="whitesmoke">Home</Typography>
          <Typography paddingLeft={2} variant="body2" color="whitesmoke">Products</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <FacebookRounded fontSize="small" color="whitesmoke" />
          <Instagram fontSize="small" color="whitesmoke" />
          <Twitter fontSize="small" color="" />
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
