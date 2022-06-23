import React, { useReducer, useEffect, useContext } from "react";

const Cart = React.createContext();
const reducer = (state, action) => {
  // Clear Cart
  if (action.type === "CLEAR") {
    return { ...state, cart: [] };
  }

  //Remove items from Cart
  if (action.type === "REMOVE") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  //Add to cart
  if (action.type === "CART") {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id,
        name: product.name,

        amount,
        image: product.image,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  //Increase amount of items
  if (action.type === "INC") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload && state.amount<10) {
        let newAmount = item.amount + 1;
        if (newAmount > item.max && state.amount<10) {
          newAmount = item.max;

          return {
            ...item,

            amount: newAmount,
          };
        }
        return { ...item, amount: newAmount };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  //Decrease amount of items
  if (action.type === "DEC") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        let decAmount = item.amount - 1;
        if (decAmount < 1) {
          decAmount = 1;
          return {
            ...item,

            amount: decAmount,
          };
        }

        return { ...item, amount: decAmount };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  //Calculate total amount of items in Cart
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

//Store cart data in local storage
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  amount: 0,
  total: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart
  const addToCart = (id, amount, product) => {
    dispatch({ type: "CART", payload: { id, amount, product } });
  };

  // remove
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  // increase
  const increase = (id) => {
    dispatch({ type: "INC", payload: id });
  };

  // decrease
  const decrease = (id) => {
    dispatch({ type: "DEC", payload: id });
  };

  // clear
  const clear = () => {
    dispatch({ type: "CLEAR" });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <Cart.Provider
      value={{ ...state, addToCart, clear, decrease, increase, remove }}
    >
      {children}
    </Cart.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Cart);
};

export { Cart, CartProvider };
