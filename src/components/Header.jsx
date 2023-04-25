import { Typography, Box } from "@mui/material";
import React from "react";
import { shades } from "../theme";

const Header = ({ title, subtitle }) => {
 
  return (
    <Box>
      <Typography
        variant="h2"
        color={shades.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={shades.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;