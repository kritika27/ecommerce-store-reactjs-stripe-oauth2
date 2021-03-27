import React, { useReducer, useEffect, useContext } from "react";
import cart from "./data";

const Cart = React.createContext();
const reducer = (state, action) => {
  if (action.type === "CLEAR") {
    return { ...state, cart: [] };
  }
  //
  if (action.type === "TOTAL") {
    let temp = state.cart.reduce((total, num) => {
      console.log(total);
      console.log(num);
    }, 0);
  }
  //
  if (action.type === "REMOVE") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  //

  if (action.type === "ADD") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  //
  if (action.type === "DEC") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          amount: item.amount - 1,
        };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  return state;
};
const initialState = {
  cart: cart,
  amount: 0,
  total: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "ADD", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DEC", payload: id });
  };

  const clear = () => {
    dispatch({ type: "CLEAR" });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <Cart.Provider value={{ ...state, clear, decrease, increase, remove }}>
      {children}
    </Cart.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(Cart);
};

export { Cart, CartProvider };
