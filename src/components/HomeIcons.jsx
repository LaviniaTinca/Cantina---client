import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import MicrowaveOutlinedIcon from '@mui/icons-material/MicrowaveOutlined';

const KitchenIcon = styled(Box)`
  width: 30%;
  height: 200px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Icon = styled(Box)`
  font-size: 64px;
  display: block;
`;

const Title = styled(Typography)`
  font-size: 24px;
  margin: 10px;
  color: olivedrab;
`;

const Description = styled(Typography)`
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;
  margin: 20px;
  padding: 10px;
`;

function KitchenIcons() {
  return (
    <Box display="flex" justifyContent="space-between" margin="42px">
      <KitchenIcon>
        <Icon style={{ color: 'red' }} ><SoupKitchenOutlinedIcon/></Icon>
        <Title variant="h3">Spicy Flavors</Title>
        <Description variant="body1">
          We use a variety of spices to add depth and heat to our dishes, creating a flavor that will leave you wanting more.
        </Description>
      </KitchenIcon>
      <KitchenIcon>
        <Icon style={{ color: 'green' }} ><GrassOutlinedIcon/></Icon>
        <Title variant="h3">Fresh Ingredients</Title>
        <Description variant="body1">
          We believe that the best dishes start with the freshest ingredients, which is why we source our produce locally and seasonally whenever possible.
        </Description>
      </KitchenIcon>
      <KitchenIcon>
        <Icon style={{ color: 'grey' }}><MicrowaveOutlinedIcon/></Icon>
        <Title variant="h3">Expert Craftsmanship</Title>
        <Description variant="body1">
          Our chefs are highly skilled and trained in the art of cooking, bringing their expertise and creativity to every dish on our menu.
        </Description>
      </KitchenIcon>
    </Box>
  );
}

export default KitchenIcons;
