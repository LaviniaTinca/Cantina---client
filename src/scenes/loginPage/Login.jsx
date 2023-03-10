import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        //backgroundColor={theme.palette.neutral.light}
        p="10px"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Cantina 
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "30%" : "53%"}
        p="2rem"
        m="2rem auto"
        borderRadius="20px"
        backgroundColor={theme.palette.neutral.light}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          o masa caldă și sănătoasă!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
