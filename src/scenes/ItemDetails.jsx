import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../state/authRedux";
import { useDispatch, useSelector } from "react-redux";
import Item from "../components/Item";
import { setItems } from "../state/authRedux";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar2'
import CartMenu from '../components/CartMenu'


const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item1, setItem] = useState(null);
 // const [items, setItems] = useState([]); //for related products
  const items = useSelector((state) => state.auth.items);
  //const item = useSelector((state) => state.auth.item)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item1 = await fetch(
      `http://localhost:3001/products/find/:${itemId}`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson);
  }

  async function getItems() {
    const items = await fetch(
        `http://localhost:3001/products/`,
        {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson));
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

    console.log("items", items)


  console.log('item1', item1, items)
  const item = items.filter(
    (product) => product._id === itemId
  )[0]


  console.log('item', item)
  return (
    <>
    <Navbar/>
    <CartMenu/>
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 20%" mt ="20px" mb="40px">
          <img
            alt={item?.name} //? afiseaza, daca nu gaseste item-ul da undefined si nu eroare
            width="300px"
            height="300px"
            src={`http://localhost:3001/assets/${item.picturePath}`}
            style={{ objectFit: "contain" }} //responsive
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          {/* <Box display="flex" justifyContent="space-between">
            <Box>Home/Item</Box>
            <Box>Prev Next</Box>
          </Box> */}

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.name}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.desc}
            </Typography>
            <Typography marginTop={3} color="crimson"><b>{item?.price} Lei / 100 grame</b></Typography>

          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              mr="20px"
              p="2px 5px"
              >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
              >
              ADD TO CART
            </Button>
          </Box>
          <Box>
            {/* <Box m="20px 0 5px 0" display="flex">
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box> */}
            <Typography marginTop={3}>CATEGORIES: {item?.categories}</Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="comments" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item?.desc}</div>
        )}
        {value === "comments" && (<div>{
        item.comments.map((comment) => (
            <p>{comment}</p>
        ))
        }</div>)}
      </Box>
      <Box marginTop={20}>
      <hr/>
      </Box>
      <hr/>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
         Alte produse din meniu
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
          >
          {items.slice(0, 10).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
            ))}
        </Box>
      </Box>
    </Box>
    <Footer/>
 </>
  );
};

export default ItemDetails;
