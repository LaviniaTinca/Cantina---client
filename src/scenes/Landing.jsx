// import ShoppingList from "./ShoppingList";
// import Subscribe from "./Subscribe";
import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";
import Newsletter from '../components/Newsletter'
import Navbar from '../components/Navbar3'

function Landing() {
  return (
    <div className="home">
      <Navbar/>
      <MainCarousel />
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Landing;
