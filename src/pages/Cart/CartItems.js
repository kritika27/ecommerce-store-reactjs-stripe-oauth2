import React from "react";
import { useGlobalContext } from "../../context/cart_context";
import { Link } from "react-router-dom";
//import CartColumns from "../../components/cart/CartColumns";
import CartItem from "../../components/cart/CartItem";
//import CartTotals from './CartTotals'
import "../../App.css";
import PageHero from "../../components/PageHero";
import StripePay from "../../components/StripeCheckout";

const CartItems = () => {
  const { cart, clear, total } = useGlobalContext();

  return (
    <>
      <PageHero name="CART" item={cart.length} />
      <div className="section section-center">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr />
        <div className="link-container">
          <Link to="/products" className="link-btn">
            Continue Shopping
          </Link>
          <button type="button" className="link-btn clear-btn" onClick={clear}>
            Clear Cart
          </button>

          <p>Total:${total}</p>

          <StripePay price={total} />
        </div>
      </div>
    </>
  );
};

export default CartItems;
