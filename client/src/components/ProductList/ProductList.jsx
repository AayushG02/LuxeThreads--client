import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./ProductList.css";
const ProductList = ({ type, isProducts, filters }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  var url =
    import.meta.env.VITE_API_URL +
    `/products?gender=${
      type === 1 ? "male" : "female"
    }&category=${selectedCategory}`;

  const { data, isLoading, isError } = useFetch(url);
  console.log(data);
  return (
    <>
      <div className="featured-product-categories">
        <div
          className={`featured-item ${
            selectedCategory === "" ? "selected-item" : ""
          }`}
          onClick={() => {
            setSelectedCategory("");
          }}
        >
          All 
        </div>
        <div
          className={`featured-item ${
            selectedCategory === "tshirt" ? "selected-item" : ""
          }`}
          onClick={() => {
            setSelectedCategory("tshirt");
          }}
        >
          T-Shirt
        </div>
        <div
          className={`featured-item ${
            selectedCategory === "joggers" ? "selected-item" : ""
          }`}
          onClick={() => {
            setSelectedCategory("joggers");
          }}
        >
          Joggers
        </div>
      </div>
      <div className="featured-products-list">
        {isError
          ? "Something went wrong"
          : isLoading
          ? "Loading..."
          : data?.map((item) => {
              return <Card key={item._id} item={item} />;
            })}
      </div>
    </>
  );
};

export default ProductList;
