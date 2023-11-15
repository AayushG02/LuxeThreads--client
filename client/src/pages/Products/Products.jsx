import React, { useRef, useState } from "react";
import "./Products.css";
import ProductList from "../../components/ProductList/ProductList";
import { useParams } from "react-router-dom";
const Products = () => {
  const type = parseInt(useParams().id);
  const [sort, setSort] = useState("desc");
  const [priceRange, setPriceRange] = useState(5000);
  const formRef = useRef();
  const clearFilters = () => {
    setSort("desc");
    setPriceRange(5000);
    formRef.current.reset();
  };
  return (
    <div className="products-container">
      <div className="products-left">
        <form className="filter-wrapper" ref={formRef}>
          <div className="filter-item">
            <h2>Filter by price</h2>
            <div className="input-item">
              <input
                type="radio"
                name="priceRange"
                id="499"
                onChange={(e) => setPriceRange(e.target.id)}
              />
              <label htmlFor="499">&le; 499</label>
            </div>
            <div className="input-item">
              <input
                type="radio"
                name="priceRange"
                id="799"
                onChange={(e) => setPriceRange(e.target.id)}
              />
              <label htmlFor="799">&le; 799</label>
            </div>
            <div className="input-item">
              <input
                type="radio"
                name="priceRange"
                id="1099"
                onChange={(e) => setPriceRange(parseInt(e.target.id))}
              />
              <label htmlFor="1099">&le; 1099</label>
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
            <p  className="clear-filters" onClick={() => clearFilters()}>Clear Filters</p>
          </div>
        </form>
      </div>
      <div className="products-right">
        <ProductList
          type={type}
          isProducts={true}
          filters={{ sort, priceRange }}
        />
      </div>
    </div>
  );
};

export default Products;
