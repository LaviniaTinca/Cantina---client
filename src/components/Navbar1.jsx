import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import { shades } from "../theme";
//import { setIsCartOpen } from "../state";
import styled from 'styled-components'
import { mobile } from "../responsive";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const cart = useSelector((state) => state.cart.cart);

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
        
          <Link to="/login" style={{ textDecoration: "none" }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
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
const MenuItem = styled.div`
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
export default Navbar;
