import React from "react";
import { useGlobalContext } from "../../context/cart_context";
import { Link } from "react-router-dom";
import CartItem from "../../components/Cart/CartItem";
import PageHero from "../../components/PageHero/PageHero";
import StripePay from "../../components/Checkout/StripeCheckout";
import "../../App.css";

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
        </div>
        <div className="cart-total-checkout">
          <article>
            <h3>
              Order Total : <span>${total}</span>
            </h3>
          </article>
          <StripePay price={total} />*
        </div>
      </div>
    </>
  );
};

export default CartItems;
