import { Box, Typography } from '@mui/material';
import React from 'react'
import { shades } from "../theme";
import { useTheme } from "@emotion/react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const DailyMenu = () => {
    const {
        palette: {neutral} ,
        } = useTheme();
  return (  
    <>
    <Box
    marginTop="70px"
    padding="40px 0"
    backgroundColor={neutral.light}
    >
            {/* Box cu Titlu */}
            <Box
                textAlign="center"
            >
                <Typography
                    variant="h4"
                    fontSize={36}
                    fontWeight="bold"
                    // mb="30px"
                    color={shades.secondary[500]}
                >
                    Meniul zilei    
                </Typography>
                <Typography
                    variant="h4"
                    fontSize={14}
                    mb="10px"
                    color={shades.secondary[500]}
                >
                9 martie 2023
                </Typography>
            </Box>
            <br/>
            {/* Box cu continutul Meniului si imagine */}
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
                >
                    {/* Coloana 1 */}
                    <Box>

                    <Box display="flex"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        columnGap="clamp(20px, 30px, 40px)">

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            mb="30px"
                            color={shades.secondary[500]}
                            >
                        Supa de chimen cu crutoane
                        </Typography>
                        <Typography variant= "h4" fontWeight="bold"
                            mb="30px"
                            color={shades.secondary[500]}>8.5 Lei/ 460 ml</Typography>
                    </Box>
                    <Box display="flex"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        columnGap="clamp(20px, 30px, 40px)">

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            mb="30px"
                            color={shades.secondary[500]}
                            >
                        Ciorba taraneasca cu legume
                        </Typography>
                        <Typography variant= "h4" fontWeight="bold"
                            mb="30px"
                            color={shades.secondary[500]}>8.5 Lei/ 460 ml</Typography>
                    </Box>
                    </Box>
                    {/*Coloana 2*/}
                    <Box display= "flex">
                        {/* <Img src = "https://th.bing.com/th/id/OIP.SB2mmzC6COTAEM6DK885NgHaRG?pid=ImgDet&rs=1"/> */}
                        {/* <Img src = "https://i0.wp.com/www.happyfoodstube.com/wp-content/uploads/2016/08/Simple-Mediterranean-Antipasti-Platter-Party-Food.jpg?resize=700%2C1050"/> */}
                        <Img src = "https://i.pinimg.com/originals/2a/a0/9c/2aa09c37e399775fc4e2b06d9e9a60e2.jpg"/>
                    </Box>
                    {/* Coloana 3 */}
                    <Box>

                    <Box display="flex"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        columnGap="clamp(20px, 30px, 40px)">

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            mb="30px"
                            color={shades.secondary[500]}
                            >
                        Supa de chimen cu crutoane
                        </Typography>
                        <Typography variant= "h4" fontWeight="bold"
                            mb="30px"
                            color={shades.secondary[500]}>8.5 Lei/ 460 ml</Typography>
                    </Box>
                    <Box display="flex"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        columnGap="clamp(20px, 30px, 40px)">

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            mb="30px"
                            color={shades.secondary[500]}
                            >
                        Ciorba taraneasca cu legume
                        </Typography>
                        <Typography variant= "h4" fontWeight="bold"
                            mb="30px"
                            color={shades.secondary[500]}>8.5 Lei/ 460 ml</Typography>
                    </Box>
                    </Box>
            </Box>
          {/*  Comanda*/}
          <Box
                mt = "30px"
                textAlign="center"
                alignItems="center"
            >
                <Box>

             <Link to = "/menuOrder" style = {{textDecoration: "none", fontSize: "20px", color: "#56000b"}}>
                {/* <Comanda>Comanda</Comanda> */}
                Comanda
             </Link>
                </Box>
            </Box>
    </Box>
    </>
  )
}

const Comanda = styled.div`
    width: 100px;
    padding: 2px 5px;
    border-radius: 5px;
    color: crimson;
    margin: 0;
    /* border: 1px solid rgba(220, 20, 60, 0.6); */
    cursor: pointer;
      &:hover {
        background-color: #56000b;
        color: white
      }
`
const Img = styled.img`
    height: 400px;
    width: 200px;
    border-radius: 2px;
    object-fit: cover;
`
export default DailyMenu