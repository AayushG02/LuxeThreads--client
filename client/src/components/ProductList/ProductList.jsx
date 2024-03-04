import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./ProductList.css";
import SkeletonCard from "../Skeleton/SkeletonCard";
const ProductList = ({ type, isProducts, filters }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  if (isProducts) {
    var { sort, priceRange } = filters;
  }

  var url =
    import.meta.env.VITE_API_URL +
    `/products?gender=${
      type === 1 ? "male" : "female"
    }&category=${selectedCategory}`;
  if (type === 3) {
    url =
      import.meta.env.VITE_API_URL + `/products?category=${selectedCategory}`;
  }
  var { data, isLoading, isError } = useFetch(url);
  if (type === 3) {
    data = data?.filter((item) => item.isNewProduct === true);
  }
  if (isProducts) {
    data = data?.filter((item) => item.price <= priceRange);
    data = data?.sort((a, b) => {
      if (sort === "asc") {
        return a.price - b.price;
      } else if (sort === "desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  }
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
        {data?.length === 0 ? (
          "Sorry no products available"
        ) : isError ? (
          "Something went wrong"
        ) : isLoading ? (
          <SkeletonCard />
        ) : (
          data?.map((item) => {
            return <Card key={item._id} item={item} />;
          })
        )}
      </div>
    </>
  );
};

export default ProductList;
