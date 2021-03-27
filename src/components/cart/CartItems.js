import React from "react";
import { useGlobalContext } from "./cart_context";
import { Link } from "react-router-dom";
//import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
//import CartTotals from './CartTotals'
import "../../App.css";

const CartItems = () => {
  const { cart, clearCart, total } = useGlobalContext();

  return (
    <div className="section section-center">
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          Clear Cart
        </button>
        <p>Total:${total}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
