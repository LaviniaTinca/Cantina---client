import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
//import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
// import Checkout from "./scenes/checkout/Checkout";
// import Confirmation from "./scenes/checkout/Confirmation";
import Footer2 from './components/Footer2'
import Register from './scenes/Register';
import Login from './scenes/Login';
import Login2 from './scenes/Login2';
import Login3 from './scenes/Login3';
import Success from './scenes/Success';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Navbar /> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/login" element = {<Login3/>}/>
          <Route path = "/register" element = {<Register/>}/>
      
          {/* <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} /> */}
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
