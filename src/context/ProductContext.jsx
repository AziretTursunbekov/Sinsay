import { createContext } from "react";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
