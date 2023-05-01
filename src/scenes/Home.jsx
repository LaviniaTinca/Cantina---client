import React from "react";
import MainCarousel from "../components/MainCarousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar3";
import CartMenu from "../components/CartMenu";
import DailyMenu from "../components/DailyMenu";
import ProductList from "../components/ProductList";
import AboutUs from "../components/AboutUs.jsx";
import KitchenIcons from "../components/HomeIcons"

const Home = () => {
  return (
    <div>
      <Navbar />
      <CartMenu />
      <MainCarousel />
      <KitchenIcons/>
      <AboutUs/>
      {/* <DailyMenu /> */}
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;