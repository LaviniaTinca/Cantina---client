import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import Home from "./scenes/Home";
import Landing from "./scenes/Landing";
// import Navbar from "./scenes/global/Navbar";
//import ItemDetails from "./scenes/itemDetails/ItemDetails";
// import CartMenu from "./scenes/global/CartMenu";
import LoginPage from "./scenes/loginPage/Login";
// import Checkout from "./scenes/checkout/Checkout";
// import Confirmation from "./scenes/checkout/Confirmation";
// import Footer2 from './components/Footer2'
// import Register from './scenes/Register';
// import Login from './scenes/Login';
// import Login2 from './scenes/Login2';
// import Login3 from './scenes/Login3';
// import Success from './scenes/Success';
import { useSelector } from "react-redux";
import ItemDetails from "./scenes/ItemDetails";
//import New from "./scenes/New";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const isAuth = Boolean(useSelector((state) => state.auth.token));
  //const isAuth = true;
  console.log(isAuth)
  console.log(useSelector((state) => state.auth))

  return (
    <div className="app">
      <BrowserRouter>

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
              path="/home"
              element={isAuth ? <Home /> : <Navigate to="/" />}
            />
          <Route path="item/:itemId" element={isAuth ? <ItemDetails /> : <Navigate to="/" />} />

        </Routes>
        {/* <CartMenu /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
