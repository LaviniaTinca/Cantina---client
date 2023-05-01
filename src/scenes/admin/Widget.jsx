import styled from "styled-components";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
//import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EuroSymbolOutlinedIcon from '@mui/icons-material/EuroSymbolOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        lk: "/users",
        icon: (
          <Icon><PersonOutlinedIcon
            style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          /></Icon>
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        lk: "/orders",
        icon: (
          <Icon><ShoppingCartOutlinedIcon
            style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
            }}
          /></Icon>
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        lk: "/earnings",
        icon: (
          <Icon><EuroSymbolOutlinedIcon
            style={{ backgroundColor: "rgba(18, 56, 227, 0.2)", color: "darkblue" }}
            // style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          /></Icon>
        ),  
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        lk: "/balance",
        icon: (
          <Icon><BalanceOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          /></Icon>
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Container>
        <Part>
            <Title>{data.title}</Title>
            <Counter>{data.isMoney && "$"} {amount}</Counter>
            <Link to = {data.lk} style={{ 
                                            textDecoration: "none", 
                                            width: "max-content", 
                                            fontSize: "12px", 
                                            borderBottom: "1px solid gray"
                                         }}>
                {data.link}
            </Link>
        </Part>
        <Part>
        <Percentage><Positive><KeyboardArrowUpIcon />{diff} % </Positive></Percentage>
            {data.icon}
        </Part>
    </Container>
  );
};

const Icon = styled.div`
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    align-self: flex-end;
  `

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 10px;
    height: 100px;
`
const Part = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Title = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: rgb(160, 160, 160);
`
const Counter = styled.span`
    font-size: 28px;
    font-weight: 300;
`
// const Link = styled.link`
//     width: max-content;
//     font-size: 12px;
//     border-bottom: 1px solid gray;
// `
const Percentage = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
`
const Positive = styled.div`
    color: green;
`
//const Negative = styled.div``

export default Widget;
