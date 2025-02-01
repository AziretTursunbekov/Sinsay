import CartList from "../components/CartList";
import { Slider } from "../components/Slider";
import { ProductList } from "../components/ProductList";

export const Main = () => {
  return (
    <div>
      <Slider />
      <CartList />
      <ProductList />
    </div>
  );
};
