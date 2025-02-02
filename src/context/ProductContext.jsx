// import { createContext, useState } from "react";
// import { PRODUCTS } from "../utils/constatnts";
// export const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState(PRODUCTS);
//   const favoriteHandler = (id) => {
//     const currentMap = products.map((item) => {
//       if (item.id === id) {
//         return { ...item, favorite: !item.favorite };
//       }
//       return item;
//     });
//     setProducts(currentMap);
//   };

//   return (
//     <ProductContext.Provider value={{ favoriteHandler }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === product.id)
        ? prev.filter((fav) => fav.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <ProductContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </ProductContext.Provider>
  );
};
