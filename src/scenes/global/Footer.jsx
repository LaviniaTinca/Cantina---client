import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import PhoneIcon from '@mui/icons-material/Phone';
  import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
  import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
  import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
                CANTINA
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        {/* </Box> */}

        {/* <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box> */}
        <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            {/* <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon> */}
          </SocialContainer>
          </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Program
          </Typography>
          <Typography mb="30px">Luni - Joi</Typography>
          <Typography mb="30px">12-16</Typography>
          <Typography mb="30px">Vineri</Typography>
          <Typography mb="30px">12-15</Typography>
       
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact
          </Typography>
          <Typography mb="30px">
            <ContactItem>
                <LocationOnOutlinedIcon style={{marginRight:"10px"}}/> Strada Dorobantilor, FN, Cluj-Napoca
            </ContactItem>
          </Typography>
          <Typography mb="30px">
            <ContactItem>
            <PhoneIcon style={{marginRight:"10px"}}/> 00740111222
            </ContactItem>
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            <ContactItem>
                <MailOutlinedIcon style={{marginRight:"10px"}} />Email: contact@cantinateo.ro
            </ContactItem>
          </Typography>

          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Box>
      </Box>
    </Box>
  );
}

const SocialContainer = styled.div`
    display: flex;
    margin-top: 50px;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
   const Payment = styled.img``;
   const ListItem = styled.li`
    width: 20px;
    margin-bottom: 10px;
  `;
  


export default Footer;
