// import ShoppingList from "./ShoppingList";
// import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
import {Carousel} from 'react-responsive-carousel'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <div className="home">Home
      <MainCarousel />
      <Newsletter/>
    </div>
  );
}

export default Home;
