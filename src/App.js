import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./scenes/Home";
import Landing from "./scenes/Landing";
import LoginPage from "./scenes/loginPage/Login";
import { useSelector } from "react-redux";
import ItemDetails from "./scenes/ItemDetails";
import Cart from "./scenes/Cart";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Dashboard from "./scenes/admin/Dashboard";
import Layout from "./scenes/Layout";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const isAuth = Boolean(useSelector((state) => state.auth.token));
  const user = useSelector((state) => state.auth.user);
  const isAdmin = isAuth && user.isAdmin;

   console.log("isAdmin", isAdmin)
  // console.log(useSelector((state) => state.auth))

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
          <Route path="cart" element={isAuth ? <Cart /> : <Navigate to="/" />} />
          <Route path="checkout" element={isAuth ? <Checkout /> : <Navigate to="/" />} />
          <Route path="checkout/success" element={isAuth ? <Confirmation /> : <Navigate to="/" />} />
          <Route path ="/dashboard" element = {isAdmin ? <Layout user = {user}/> : <Navigate to="/" />}>
            <Route path = "/dashboard" element = {<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
