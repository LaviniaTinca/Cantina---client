import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  styled,
  Typography,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveIcon from "@mui/icons-material/Remove";

import Navbar from "../components/Navbar2";
import CartMenu from "../components/CartMenu";
import Footer from "../components/Footer";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../state/authRedux";
// import styled from "styled-components"
import { shades } from "../theme";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  // align-items: center;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.auth.cart);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);
  const [voucher, setVoucher] = useState("");
  const [error, setError] = useState("");

  const handleDecreaseCount = (id) => {
    dispatch(decreaseCount({ id }));
  };

  const handleIncreaseCount = (id) => {
    dispatch(increaseCount({ id }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  function handleVoucherChange(event) {
    const value = event.target.value;
    if (value.length !== 8) {
      setError("The voucher code should be 8 characters long!");
    } else if (!/^\d+$/.test(value)) {
      setError("The voucher code should contain only digits!");
    } else {
      setError("");
      setVoucher(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (voucher.length === 8 && /^\d+$/.test(voucher)) {
      console.log("Submitted voucher:", voucher);
      // Reset the voucher input field
      setVoucher("");
    } else {
      setError("Invalid voucher code!");
    }
  }

  return (
    <>
      <Navbar />
      <CartMenu />
      <Box width="80%" m="80px auto">
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          marginBottom={10}
          // mb="30px"
          color={shades.secondary[500]}
        >
          <span>Pachetul de pranz</span>
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box>
              {cart.map((item) => (
                <Box key={`${item.name}-${item._id}`}>
                  <FlexBox p="15px 0" borderRadius="50%">
                    <Box flex="1 1 60%">
                      <FlexBox mb="5px">
                        <img
                          alt={item?.name}
                          width="35px"
                          height="40px"
                          src={`http://localhost:3001/assets/${item.picturePath}`}
                          style={{ borderRadius: "10px" }}
                          onClick={() => {
                            navigate(`/item/${item._id}`);
                          }}
                          sx={{
                            "&:hover": {
                              cursor: "pointer",
                            },
                          }}
                        />
                        <Box width="150px">
                          <Typography
                            onClick={() => {
                              navigate(`/item/${item._id}`);
                            }}
                            sx={{
                              textDecoration: "underline",
                              color: shades.primary.main,
                              "&:hover": {
                                cursor: "pointer",
                                color: shades.primary.light,
                              },
                            }}
                            fontWeight="bold"
                          >
                            {item.name}
                          </Typography>
                        </Box>
                        <Box
                          display="flex"
                          alignItems="center"
                          border={`1.5px solid ${shades.neutral[500]}`}
                        >
                          <Tooltip
                            title="Scade"
                            arrow
                            classes={{ tooltip: "blue-tooltip" }}
                          >
                            <IconButton
                              sx={{ color: "#0f399d" }}
                              onClick={() => handleDecreaseCount(item._id)}
                            >
                              <RemoveIcon />
                            </IconButton>
                          </Tooltip>
                          <Typography sx={{ color: "#04642f" }}>
                            {item.count}
                          </Typography>
                          <Tooltip
                            title="Adauga"
                            arrow
                            classes={{ tooltip: "green-tooltip" }}
                          >
                            <IconButton
                              sx={{ color: "#04642f" }}
                              onClick={() => handleIncreaseCount(item._id)}
                            >
                              <AddIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                        <Tooltip
                          title="Sterge"
                          arrow
                          classes={{ tooltip: "red-tooltip" }}
                        >
                          <IconButton
                            sx={{ color: shades.secondary[600] }}
                            onClick={() => handleRemoveFromCart(item._id)}
                          >
                            {/* Add your icon here */}
                            <DeleteOutlinedIcon />
                          </IconButton>
                        </Tooltip>
                        <style jsx>{`
                          .red-tooltip {
                            background-color: #800011 !important;
                          }
                          .blue-tooltip {
                            background-color: #0f399d !important;
                          }
                          .green-tooltip {
                            background-color: #04642f !important;
                          }
                        `}</style>

                        <Typography fontWeight="bold">
                          {item.price} Ron
                        </Typography>
                        <Typography fontWeight="bold">
                          {item.price * item.count} Ron
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
              <FlexBox m="10px 0" color={shades.secondary[600]}>
                <Typography fontWeight="bold">
                  <span>SUBTOTAL</span> ( {cart.length} produse/sortimente ){" "}
                </Typography>
                <Typography fontWeight="bold">{totalPrice} Ron</Typography>
              </FlexBox>
              {/* <FlexBox>
                <ButtonStyled marginLeft="200px" onClick={() => { navigate("/home"); }}>CONTINUA CUMPARATURILE</ButtonStyled>
                <ButtonStyled onClick={() => { navigate("/checkout"); }}> FINALIZARE </ButtonStyled>
              </FlexBox> */}
            </Box>
          </Grid>

          {/* VOUCHER SECTION */}

          <Grid item xs={12} md={5}>
            <Box marginLeft={10}>
              <Box border="1px solid #ecebeb" height="500px">
                <br />
                <br />
                <label
                  style={{
                    marginTop: "40px",
                    padding: "20px",
                    fontSize: "20",
                    color: shades.secondary[800],
                  }}
                  htmlFor="voucher-input"
                >
                  Daca ai un voucher, introdu numarul in casuta:
                </label>
                <form
                  style={{
                    padding: "3px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: "20px ",
                  }}
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    id="voucher-input"
                    value={voucher}
                    onChange={handleVoucherChange}
                  />
                  {error && <div className="error">{error}</div>}
                  <ButtonStyled
                    fontSize="8px"
                    type="submit"
                    style={{ marginLeft: "10px" }}
                  >
                    Adauga cod
                  </ButtonStyled>
                </form>
                <br />
                <Box height="100px" width="200px">
                  <FlexBox
                    flexDirection="column"
                    height="110%"
                    padding={2}
                    color={shades.secondary[600]}
                  >
                    <FlexBox justifyContent="space-between">
                      <Typography fontWeight="bold">
                        <span>SUBTOTAL: </span>
                      </Typography>
                      <Typography fontWeight="bold">
                        {totalPrice} Ron
                      </Typography>
                    </FlexBox>
                    <FlexBox justifyContent="space-between">
                      <Typography fontWeight="bold">
                        <span>DISCOUNT: </span>
                      </Typography>
                      <Typography fontWeight="bold">
                        <span>0 Ron: </span>
                      </Typography>
                    </FlexBox>
                    <FlexBox justifyContent="space-between">
                      <Typography fontWeight="bold">
                        <span>TOTAL: </span>
                      </Typography>
                      <Typography fontWeight="bold">
                        <span>100 Ron: </span>
                      </Typography>
                    </FlexBox>
                  </FlexBox>
                </Box>

                <FlexBox margin="10px">
                  <ButtonStyled
                    style={{ flexGrow: 1, marginRight: "100px" }}
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    CONTINUA CUMPARATURILE
                  </ButtonStyled>
                  <ButtonStyled
                    onClick={() => {
                      navigate("/checkout");
                    }}
                  >
                    {" "}
                    FINALIZARE{" "}
                  </ButtonStyled>
                </FlexBox>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

const ButtonStyled = styled(Button)`
  background-color: #f3c9a3;

  border: none;
  color: black;
  border-radius: 2px;
  min-width: 20%;
  height: 20px;
  padding: 20px 40px;
  margin: 20px 0;

  &:hover {
    background-color: ${shades.secondary[600]};
    color: white;
  }
`;

export default Cart;
