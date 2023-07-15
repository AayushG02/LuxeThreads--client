import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List"
import "./Products.css";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const id = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("desc");

  const [selectedSubCat, setSelectedSugbCat] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-catogories?[filters][categories][id][$eq]=${id}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSugbCat(
      isChecked
        ? [...selectedSubCat, value]
        : selectedSubCat.filter((item) => item !== value)
    );
  };
  console.log(selectedSubCat);
  return (
    <div className="products">
      <div className="products-left">
        <div className="filter-item">
          <h2>Product Categories</h2>
          {error
            ? "something went wrong"
            : loading
            ? "loading..."
            : data?.map((item) => {
                return (
                  <div className="input-item" key={item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={item.id}> {item.attributes.title} </label>
                  </div>
                );
              })}
        </div>
        <div className="filter-item">
          <h2>Filter by price</h2>
          <div className="input-item">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter-item">
          <h2>Sort By</h2>
          <div className="input-item">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort(e.target.id)}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="input-item">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort(e.target.id)}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="products-right">
        {/* <img className="cat-img" src={ import.meta.env.VITE_IMG_URL + data.attributes.img.attributes.url} alt="" /> */}
        <List catId={id} maxPrice={maxPrice} sort={sort} subCat = {selectedSubCat}/>
      </div>
    </div>
  );
};

export default Products;
