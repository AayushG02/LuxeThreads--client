import React from "react";
import "./FeaturedProducts.css";
import ProductList from "../ProductList/ProductList";
import { Link } from "react-router-dom";
import forHim from "../../assets/forhim.webp";
import forHer from "../../assets/forher.webp";

const FeaturedProducts = ({ type }) => {
  const style =
    type === 1 ? { flexDirection: "row-reverse" } : { flexDirection: "row" };
  return (
    <div className="featured-product-container" style={style}>
      <div className="featured-left">
        <div className="product-wrapper">
          <h1 className="featured-header">#for{type === 1 ? "him" : "her"}</h1>
          <div className="featured-img-container">
            <Link className="link" to={`/products/${type}`}>
              <button className="featured-shop-now">SHOP NOW</button>
            </Link>
            <img src={type === 1 ? forHim : forHer} alt="" />
          </div>
        </div>
      </div>
      <div className="featured-right">
        <ProductList type={type} isProducts = {false} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
