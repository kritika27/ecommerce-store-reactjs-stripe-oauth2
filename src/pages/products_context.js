import React, { useReducer, useContext } from "react";
import data from "./data.js";

const initialState = {
  products: data,
};

const ProductsContext = React.createContext();
const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let temp = state.products.filter((item) => {
      if (item.id === action.payload) {
        return item;
      }
      //return item;
    });
    return { ...state, cart: temp };
    //return { ...state, cart: [...state.cart, temp] };
  }

  //PRODUCTS
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
    console.log(id);
  };

  //Products
  const inc = (id) => {
    dispatch({ type: "INC", payload: id });
    //console.log(id);
  };
  const dec = (id) => {
    dispatch({ type: "DEC", payload: id });
    //console.log(id);
  };

  //Cart
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
    //console.log(id);
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
    //console.log(id);
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
    //console.log(id);
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, increase, decrease, inc, dec, addToCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider };
