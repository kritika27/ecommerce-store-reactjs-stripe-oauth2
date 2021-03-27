import React from "react";
import { useGlobalContext } from "./cart_context";
import "./Cart.css";
export default function CartItem({ id, title, img, price, amount }) {
  const { cart, clear, remove, decrease, increase, total } = useGlobalContext();
  //console.log(cart);*/
  /*  return (
    <div>
      <h1>Cart items</h1>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button onClick={() => decrease(item.id)}>-</button>
            <p>{item.amount}</p>
            <button onClick={() => increase(item.id)}>+</button>
            <button onClick={() => remove(item.id)}>Remove</button>
          </div>
        );
      })}
      <button onClick={clear}>CLEAR CART</button>
      <p>Total:${total}</p>
      <button>Checkout</button>
    </div>
  );
}*/

  //import { useCartContext } from "../context/cart_context";

  //const CartItem = ({ id, image, name, color, price, amount }) => {
  //  const { cart, clear, remove, decrease, increase, total } = useGlobalContext();

  return (
    <div className="cart">
      <div className="title">
        <img src={img} alt={title} />
        <div>
          <h5 className="name">{title}</h5>

          <h5 className="price-small">${price}</h5>
        </div>
      </div>

      <h5 className="subtotal">${price * amount}</h5>
      <button type="button" className="remove-btn" onClick={() => remove(id)}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
}
