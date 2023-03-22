import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,  useMediaQuery,} from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { shades } from "../theme";
import styled from 'styled-components'
import { mobile } from "../responsive";
import { setMode, setLogout, setIsCartOpen } from "../state/authRedux";
import LogoutIcon from '@mui/icons-material/Logout';
//import Tooltip from '@mui/joy/Tooltip';
// import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.auth.cart);
 const user = useSelector((state) => state.auth.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
 // const fullName = "Lavinia Tinca";
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
        CANTINA
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          {/* <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton> */}
        <Typography sx={{ marginTop: "10px" }}>{fullName}</Typography>
        {/* //<Tooltip title="Pachet"> */}
        {/* <Tooltip color= "shades.secondary[500]" size="sm" variant = "outlined">Pachet */}
        <Badge
            //badgeContent={7}
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 10,
                padding: "0 4px",
                height: "14px",
                minWidth: "10px",
              },
            }}
          
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >       
            
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
            {/* </Tooltip> */}
  
        
            {/* <Typography sx={{ marginTop: "10px" }}>{fullName}</Typography> */}
            <MenuItem onClick={() => dispatch(setLogout())}><LogoutIcon/>  Log  Out</MenuItem>
          {/* <IconButton sx={{ color: "black" }}>
            <PersonOutline onClick = {handlePersonClick}/>
          </IconButton> */}
           {/* <FormControl variant="standard" value = {fullName} >
            <Select
              value={fullName}
              sx={{
                backgroundColor: shades.neutral[200],
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: shades.neutral[400],
                },
              }}
              input={<InputBase />}
            >
              {/* <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem> */}
              {/* <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl> */} 
        </Box>
      </Box>
    </Box>
  );
}

const MenuItem1 = styled.button`
  font-size: 12px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
// const MenuItem = styled.div`
// margin-top: 5px;
//     padding: 2px 5px;
//     border-radius: 5px;
//     color: #576a98;
//     //border: 1px solid rgba(136, 155, 188, 0.6);
//     cursor: pointer;
//       &:hover {
//         background-color: rgba(152, 191, 238, 0.1);
//       }
//`
export default Navbar;
