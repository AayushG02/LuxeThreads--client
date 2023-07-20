import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.css";
import useFetch from "../../hooks/useFetch";
const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  );
  console.log("Featured Products: ", data)
  return (
    <div className="featured">
      <h1 className="featured-header">{type} Products</h1>
      <div className="featured-cards">
        {error ? "something went wrong" : loading ? "Loading" : data?.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
