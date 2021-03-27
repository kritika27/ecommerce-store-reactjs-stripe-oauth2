import React from "react";

//import data from "./data";
import { Link } from "react-router-dom";
import { useProductsContext } from "./products_context";
import "../App.css";
const ProductList = () => {
  const { products, inc, dec, addToCart } = useProductsContext();
  console.log(products);
  return (
    <div className="cocktails-center">
      {products.map((product) => {
        const { id, image, name, price, description, amount } = product;
        return (
          <article key={id} className="cocktail">
            <div className="img-container">
              <img src={image} alt={name} />
            </div>
            <div className="cocktail-footer">
              <div className="product">
                <h4>{name}</h4>
                <h4 className="price">${price}</h4>
              </div>
              <div className="amount">
                <button onClick={() => dec(id)}>-</button>
                <p>{amount}</p>
                <button onClick={() => inc(id)}>+</button>
              </div>
              <button className="add-cart" onClick={() => addToCart(id)}>
                Add to cart
              </button>

              <Link to={`/products/${id}`} className="prod-details">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ProductList;
