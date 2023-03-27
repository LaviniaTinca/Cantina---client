import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import styled from "styled-components"

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    
    url("https://cdn8.dissolve.com/p/D2115_120_316/D2115_120_316_1200.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
  return (
    <Box>
      <Container>

      {/* <Box
        width="100%"
        // backgroundImage = {url("https://th.bing.com/th/id/R.e2321907a8b1da6bda4377944ea8413c?rik=nO8zfejnLSp1tA&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f09%2fFood-Computer-Wallpaper.jpg&ehk=dqeQSFlrAedjtFMP077N3e9leQ8Ys%2bClRi6NZX%2fJmgc%3d&risl=&pid=ImgRaw&r=0")}
        p="10px"
        textAlign="center"
        >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Cantina 
        </Typography>
      </Box> */}

      <Box
        width={isNonMobileScreens ? "30%" : "53%"}
        p="2rem"
        m="2rem auto"
        borderRadius="20px"
        //backgroundColor="transparent"
        backgroundColor={theme.palette.neutral.light}
        >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          o masa caldă și sănătoasă!
        </Typography>
        <Form />
      </Box>
        </Container>
    </Box>
  );
};

export default LoginPage;
