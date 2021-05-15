import React from "react";
import { useGlobalContext } from "../../context/cart_context";
import AmountButtons from "../AmountButtons/AmountButtons";
import "./Cart.css";

const CartItem = React.memo(function CartItem({
  id,
  name,
  image,
  price,
  amount,
}) {
  const { remove, decrease, increase } = useGlobalContext();

  return (
    <div className="cart">
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>

          <h5 className="price-small">${price}</h5>
        </div>
      </div>

      <AmountButtons
        amount={amount}
        inc={() => increase(id)}
        dec={() => decrease(id)}
      />
      <h5 className="subtotal">${price * amount}</h5>
      <button type="button" className="remove-btn" onClick={() => remove(id)}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
});
export default CartItem;
