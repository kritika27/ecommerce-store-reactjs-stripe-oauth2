import React, { useReducer, useContext } from "react";
import data from "../data";

const initialState = {
  products: data,
};

const ProductsContext = React.createContext();
const reducer = (state, action) => {
  if (action.type === "INC") {
    let tempProducts = state.products.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, products: tempProducts };
  }

  if (action.type === "DEC") {
    let tempProducts = state.products.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    return { ...state, products: tempProducts };
  }
  return state;
};
const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
  };

  const inc = (id) => {
    dispatch({ type: "INC", payload: id });
  };
  const dec = (id) => {
    dispatch({ type: "DEC", payload: id });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, inc, dec, addToCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider };
