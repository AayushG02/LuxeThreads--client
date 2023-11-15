import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./ProductList.css"
const ProductList = ({ type, isProducts, filters }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  if (isProducts === true) {
    const { sort, priceRange } = filters;

    var url =
      type === 3
        ? import.meta.env.VITE_API_URL +
          `/products?populate=*&filters[price][$lte]=${priceRange}&sort=price:${sort}&filters[isNew][$eq]=true${
            selectedCategory !== ""
              ? `&filters[sub_categories][id][$eq]=${selectedCategory}`
              : ""
          }`
        : import.meta.env.VITE_API_URL +
          `/products?populate=*&filters[price][$lte]=${priceRange}&sort=price:${sort}&filters[categories][id][$eq]=${type}${
            selectedCategory !== ""
              ? `&filters[sub_categories][id][$eq]=${selectedCategory}`
              : ""
          }`;
  } else {
    url =
      import.meta.env.VITE_API_URL +
      `/products?populate=*&filters[categories][id][$eq]=${type}${
        selectedCategory !== ""
          ? `&filters[sub_categories][id][$eq]=${selectedCategory}`
          : ""
      }`;
  }
  console.log(type, url);
  const { data, isLoading, isError } = useFetch(url);
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
            selectedCategory === 1 ? "selected-item" : ""
          }`}
          onClick={() => {
            setSelectedCategory(1);
          }}
        >
          T-Shirt
        </div>
        <div
          className={`featured-item ${
            selectedCategory === 2 ? "selected-item" : ""
          }`}
          onClick={() => {
            setSelectedCategory(2);
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
              return <Card key={item.id} item={item} />;
            })}
      </div>
    </>
  );
};

export default ProductList;
