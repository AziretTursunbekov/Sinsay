import { ProductList } from "./components/ProductList";
import { Icons } from "./assets";

const App = () => {
  return (
    <div>
      <ProductList />
      <Icons.like />
    </div>
  );
};

export default App;
