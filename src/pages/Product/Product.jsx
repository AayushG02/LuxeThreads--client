import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.css";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
const Product = () => {
  const id = parseInt(useParams().id);
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  return (
    <div className="product">
      <div className="product-left">
        <div className="product-imgs">
          <img
            src={
              import.meta.env.VITE_IMG_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            onClick={() => setSelectedImg("img")}
          />
          <img
            src={
              import.meta.env.VITE_IMG_URL +
              data?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            onClick={() => setSelectedImg("img2")}
          />
        </div>
        <div className="display-img">
          <img
            src={
              import.meta.env.VITE_IMG_URL +
              data?.attributes[selectedImg]?.data.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
      <div className="product-right">
        <h1 className="product-title">{data?.attributes?.title}</h1>
        <span className="product-price">
          <span className="product-old-price" >₹{data?.attributes?.price + 300}</span>₹
          {data?.attributes?.price}
        </span>
        <p className="product-desc">{data?.attributes?.desc}</p>
        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((current) => (current === 1 ? 1 : current - 1))
            }
          >
            -
          </button>

          <span>{quantity}</span>

          <button onClick={() => setQuantity((current) => current + 1)}>
            +
          </button>
        </div>
        <button className="add">
          <ShoppingCartOutlinedIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderSharpIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="product-info">
          <p>Vendor: LuxeThreads</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
