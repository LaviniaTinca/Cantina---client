import React from 'react'
import MainCarousel from "../components/MainCarousel";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar2'
import CartMenu from '../components/CartMenu'
import DailyMenu from '../components/DailyMenu';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <CartMenu/>
        <MainCarousel />
        <DailyMenu/>
        <ProductList/>
        <Footer/>
    </div>
  )
}

export default Home