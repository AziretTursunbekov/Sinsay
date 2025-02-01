import CartList from "../components/CartList";
import { ProductList } from "../components/ProductList";
import Slider from "../components/Slider";
import Footer from "../pages/Footer/Footer";
import Header from "../pages/header/Header";

export const Main = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductList />
      <CartList />
      <Footer />
    </div>
  );
};
