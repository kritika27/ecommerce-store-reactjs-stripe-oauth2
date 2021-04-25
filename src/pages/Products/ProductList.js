import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import AddToCart from "../../components/cart/AddToCart";
import PageHero from "../../components/PageHero";
import "../../App.css";
const ProductList = () => {
  const { products } = useProductsContext();
  console.log(products);
  return (
    <>
      <PageHero item={products.length} name="PRODUCTS" />
      <div className="cocktails-center">
        {products.map((product) => {
          const { id, image, name, price } = product;
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

                <AddToCart product={product} />
                <Link to={`/products/${id}`} className="prod-details">
                  <button>Details</button>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};
export default ProductList;
