import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  Menu,
  FormControl,
  useMediaQuery,
} from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
  Logout,
} from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { shades } from "../theme";
import styled from "styled-components";
import { mobile } from "../responsive";
import { setMode, setLogout, setIsCartOpen } from "../state/authRedux";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.auth.cart);
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = Boolean(useSelector((state) => state.auth.token));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  let fullName 
    if (isAuthenticated){
        fullName = `${user.firstName} ${user.lastName}`;
    }

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
          onClick={() => navigate("/home")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          CANTINA
        </Box>
        <Box display="flex" justifyContent="space-between" columnGap="20px" zIndex="2">
          {!isAuthenticated && (
            <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem1>SIGN IN</MenuItem1>
          </Link>
          )}
          {isAuthenticated && (
            <>
                <Box sx={{ display: "flex", alignItems: "center" }}>

              {/* <Typography sx={{ marginTop: "10px" }}>{fullName}</Typography> */}
              <Badge
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
                    sx={{ color: "black", marginLeft: "10px" }}
                    >
                    <ShoppingBagOutlined sx={{ fontSize: '25px' }}/>
                    </IconButton>
                </Badge>

              <IconButton style={{ width: "20px", height: "20px", marginLeft: "30px" }}
                onClick={handleOpen}
                sx={{ color: "black", marginLeft: "5px" }}
              >
                <Avatar 
                  src={`http://localhost:3001/assets/${user.picturePath}`}
                  onClick={handleOpen}
                />
              </IconButton>
              {/* <MenuOutlined
                style={{ marginLeft: "5px", marginTop: "10px", cursor: "pointer" }}
                onClick={handleOpen}
              /> */}
              <StyledMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => navigate("/dashboard/profile")}>
                  Profil
                </MenuItem>
              
                {user.isAdmin && (
                  <MenuItem onClick={() => navigate("/dashboard")}>Dashboard</MenuItem>
                )}
                <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
              </StyledMenu>
              <Typography sx={{ marginTop: "10px", marginLeft: "20px"  }}>{fullName}</Typography>

              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

const MenuItem1 = styled.div`
    margin-top: 5px;
    padding: 2px 5px;
    border-radius: 5px;
    color: #576a98;
    //border: 1px solid rgba(136, 155, 188, 0.6);
    cursor: pointer;
      &:hover {
        background-color: rgba(152, 191, 238, 0.1);
      }
`

const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    margin-top: 40px;
    width: 200px;
    border-radius: 0px 0px 5px 5px;
  }
`;

export default Navbar;
