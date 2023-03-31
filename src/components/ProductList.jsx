import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../state/authRedux";

const ProductList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all"); //value for our filter option
  const items = useSelector((state) => state.auth.items);
  //const  items = []
  //console.log("items", items)
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:3001/products/",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson));
    //dispatch(setItems(items))
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //  console.log("items", useSelector((state) => state.auth.items))
   console.log("items", useSelector((state) => state.auth.items))

  const soupItems = items.filter(
    (item) => item.categories === "ciorba"
  );
  const garnituraItems = items.filter(
    (item) => item.categories === "garnitura"
  );
  const principalItems = items.filter(
    (item) =>item.categories === "principal"
  )
  const desertItems = items.filter(
    (item) => item.categories === "desert"
  );
  const diverseItems = items.filter(
    (item) => item.categories === "diverse"
  )
// console.log("soupItems", soupItems)
console.log("soupItems", soupItems)

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Meniul <b>zilei</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="Meniul complet" value="all" />
        <Tab label="SUPE/Ciorbe" value="soup" />
        <Tab label="Garnituri" value="garnitura" />
        <Tab label="Principal" value="principal" />
        <Tab label="Desert" value="desert" />
        <Tab label="Diverse" value="diverse" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 200px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "soup" &&
          soupItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
          {value === "garnitura" &&
          garnituraItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
          {value === "principal" &&
          principalItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
          {value === "desert" &&
          desertItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
          {value === "diverse" &&
          diverseItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        
      </Box>
    </Box>
  );
};

export default ProductList;
