import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "./products_context";
//import { single_product_url as url } from "../utils/constants";
//import { formatPrice } from "../utils/helpers";
//import // AddToCart,
//Stars,
//PageHero,
//"../components";
//import styled from "styled-components";
import { Link } from "react-router-dom";
import "./SingleProduct.css";
const SingleProduct = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products, dec, inc } = useProductsContext();

  const temp = products.filter((product) => product.id === id);

  return (
    <div>
      {temp.map((products) => {
        const {
          name,
          price,
          description,
          amount,
          //stock,
          //stars,
          //reviews,
          //id: sku,
          //company,
          image,
        } = products;
        return (
          <div className="product-center" key={products.id}>
            <img src={image} alt={name} />
            <section className="content-prod">
              <h2>{name}</h2>
              {/*} <Stars stars={stars} reviews={reviews} />*/}
              <h5 className="price-prod">${price}</h5>
              <p className="description"> {description}</p>
              <p className="info-prod">
                <span>Available : </span>
                In stock
              </p>

              <hr />
              <div className="amount">
                <button onClick={() => dec(id)}>-</button>
                <p>{amount}</p>
                <button onClick={() => inc(id)}>+</button>
              </div>
              <button className="add-cart">Add to cart</button>
              {/*stock > 0 && <AddToCart product={product} />*/}
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
