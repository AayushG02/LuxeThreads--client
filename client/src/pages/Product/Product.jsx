import React, { useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import toast from "react-hot-toast";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useSelector } from "react-redux";

const Product = () => {
  const id = useParams().id;
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useFetch(
    import.meta.env.VITE_API_URL + `/products/${id}`
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);
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
          <img src={data?.images[0]} onClick={() => setSelectedImg(0)} />
          <img src={data?.images[1]} onClick={() => setSelectedImg(1)} />
        </div>
        <div className="selected-img">
          <img src={data?.images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="product-right">
        <div className="product-title">{data?.title}</div>
        <div className="product-price">
          <span className="product-old-price">₹{data?.price + 300}</span>₹
          {data?.price}
        </div>
        <div className="product-desc">{data?.description}</div>
        <div className="temp">
          <div className="product-quantity">
            <span>Quantity</span>
            <button onClick={() => handleDecrement()}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleIncrement()}>+</button>
          </div>
          <button
            className="add-cart"
            onClick={() => {
              if (user.id === "") {
                toast.error("Please login to add to cart", {
                  duration: 2000,
                });
                return;
              }
              dispatch(
                addToCart({
                  id: data._id,
                  title: data.title,
                  description: data.description,
                  price: data.price,
                  img: data.images[0],
                  quantity,
                })
              );
              toast.success("Product added to cart!", {
                duration: 2000,
              });
            }}
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
