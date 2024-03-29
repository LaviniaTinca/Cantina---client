import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../state/authRedux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.auth.cart);
  const isCartOpen = useSelector((state) => state.auth.isCartOpen);
 // const [isCartOpen, seIsCartOpen] = useState(false)

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);

const Img = styled.img`
border-radius: 10px
`
  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.3)"
      position="fixed"
      zIndex={5}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="auto"
        width="max(400px, 20%)"
        height="80%"
        backgroundColor="white"
        borderRadius={2}
        sx={{top: "60px", right: "130px"}}
      >
        <Box padding="10px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="5px">
            <Typography variant="h4"><span>Pachet</span> ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart.map((item) => (
              <Box key={`${item.name}-${item._id}`}>
                <FlexBox p="15px 0" borderRadius="50%">
                  <Box flex="1 1 40%" borderRadius="50%">
                    <Img
                      alt={item?.name}
                      width="70px"
                      height="80px"
                      src={`http://localhost:3001/assets/${item.picturePath}`}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        {item.name}
                      </Typography>
                      <IconButton sx={{color:"red"}} title="Sterge"
                        onClick={() =>
                          dispatch(removeFromCart({ id: item._id }))
                        }
                      >
                        <DeleteOutlinedIcon />
                      </IconButton>
                    </FlexBox>
                    {/* <Typography>{item.desc}</Typography> */}
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton title="Scade"
                          onClick={() =>
                            dispatch(decreaseCount({ id: item._id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton title="Adauga"
                          onClick={() =>
                            dispatch(increaseCount({ id: item._id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography fontWeight="bold">
                        {item.price} lei
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m="10px 0">
            <FlexBox m="10px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">{totalPrice} Lei</Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: shades.neutral[200],
                border: "black",
                color: "black",
                borderRadius: 2,
                minWidth: "100%",
                height: "20px",
                padding: "20px 40px",
                m: "20px 0",
                "&:hover": { 
                  backgroundColor: shades.secondary[800],
                  color: "white" },
              }}
              onClick={() => {
                navigate("/cart");
                dispatch(setIsCartOpen({}));
              }}
            >
              FINALIZARE
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
