import React from 'react'
import styled from 'styled-components'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Chart1 = () => {
  return (
    <Container>
        <Top>
            <Titlu>Total Revenue</Titlu>
            <MoreVertIcon fontSize="small" />
        </Top>
        <Bottom>
            <FeaturedChart><CircularProgressbar value={50} text={"50%"} strokeWidth={3}/></FeaturedChart>
            <Title>Today's total sales</Title>
            <Amount>3500 Ron</Amount>
            <Description>Previous transactions processing. Last payments may not be included.</Description>
            <Summary>
                <Item>
                    <ItemTitle>Target</ItemTitle>
                    <ItemResult><Negative><KeyboardArrowDownIcon fontSize="small"/>4000 Ron</Negative></ItemResult>
                </Item>
                <Item>
                    <ItemTitle>Last week</ItemTitle>
                    <ItemResult><Positive><KeyboardArrowUpOutlinedIcon fontSize="small"/>4000 Ron</Positive></ItemResult>
                </Item>
                <Item>
                    <ItemTitle>Last Month</ItemTitle>
                    <ItemResult><Positive><KeyboardArrowUpOutlinedIcon fontSize="small"/>4000 Ron</Positive></ItemResult>
                </Item>
            </Summary>
        </Bottom>
    </Container>
  )
}

const Container = styled.div`
     flex: 2;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gray;
`
const Titlu = styled.h1`
    font-size: 16px;
    font-weight: 500;
`
const Bottom = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
const FeaturedChart = styled.div`
    width: 100px;
    height: 100px;
    color: green;
`
const Title = styled.p`
    font-weight: 500;
    color: gray;
`
const Amount = styled.p`
    font-size: 30px;
`
const Description = styled.p`
    font-weight: 300;
    font-size: 12px;
    color: gray;
    text-align: center;
`
const Summary = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Item = styled.div`
    text-align: center;
`
const ItemTitle = styled.div`
    font-size: 14px;
    color: gray;
`
const ItemResult = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
`
const Positive = styled.div`
    color: green;
`
const Negative = styled.div`
    color: #8b0606;
`
export default Chart1