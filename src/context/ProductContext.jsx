import { createContext, useReducer, useContext } from "react";

const ProductContext = createContext();

const initialState = {
  favorites: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      const exists = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter((item) => item.id !== action.payload.id)
          : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const toggleFavorite = (item) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: item });
  };

  return (
    <ProductContext.Provider
      value={{ favorites: state.favorites, toggleFavorite }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
