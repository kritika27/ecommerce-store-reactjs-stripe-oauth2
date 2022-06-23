import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/cart_context";
import AmountButtons from "../AmountButtons/AmountButtons";
import "./Cart.css";

const AddToCart = React.memo(function AddToCart ({ product }) {
  const { addToCart } = useGlobalContext();
  const { id, stock } = product;

  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <div className="btn-container">
      <AmountButtons amount={amount} inc={increase} dec={decrease} />
      <Link
        className="add-cart"
        onClick={() => addToCart(id, amount, product)}
      >
        Add to cart
      </Link>
      
    </div> 
  );
})

export default AddToCart;
