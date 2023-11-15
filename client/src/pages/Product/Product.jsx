import React, { useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
const Product = () => {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();
  console.log(id);
  const { data, isLoading, isError } = useFetch(
    import.meta.env.VITE_API_URL + `/products/${id}?populate=*`
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState("img");
  const handleIncrement = () => {
    setQuantity((curr) => curr + 1);
  };
  const handleDecrement = () => {
    setQuantity((curr) => Math.max(curr - 1, 1));
  };

  return (
    <div className="product-container">
      <div className="product-left">
        <div className="preview-img">
          <img
            src={
              import.meta.env.VITE_IMG_URL +
              data?.attributes?.img?.data?.attributes?.url
            }
            onClick={() => setSelectedImg("img")}
          />
          <img
            src={
              import.meta.env.VITE_IMG_URL +
              data?.attributes?.img2?.data?.attributes?.url
            }
            onClick={() => setSelectedImg("img2")}
          />
        </div>
        <div className="selected-img">
          <img
            src={
              import.meta.env.VITE_IMG_URL +
              data?.attributes?.[selectedImg]?.data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
      <div className="product-right">
        <div className="product-title">{data?.attributes?.title}</div>
        <div className="product-price">
          <span className="product-old-price">
            ₹{data?.attributes?.price + 300}
          </span>
          ₹{data?.attributes?.price}
        </div>
        <div className="product-desc">{data?.attributes?.desc}</div>
        <div className="temp">
          <div className="product-quantity">
            <span>Quantity</span>
            <button onClick={() => handleDecrement()}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleIncrement()}>+</button>
          </div>
          <button
            className="add-cart"
            onClick={() =>
              dispatch(
                addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  desc: data.attributes.desc,
                  price: data.attributes.price,
                  img: data.attributes.img.data.attributes.url,
                  quantity,
                })
              )
            }
          >
            <AddShoppingCartOutlinedIcon />
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
