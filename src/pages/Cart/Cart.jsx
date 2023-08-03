import React from "react";

import "./Cart.css";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

import { makeRequest } from "../../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51NUrsQSEzfM6UcbCXN1wutEA4PzZufZyTHBSsL35Iw6N9SCA62q6QpiBdFEMzf2XsHFQKG5StV2QxmaPUYof4mWO00jxSlnSS6"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart">
      {products.length == 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        <h1>Products in your cart</h1>
      )}
      <div className="cart-products">
        {products?.map((item) => (
          <Link className="link" to={`/product/${item.id}`}>
            <div className="cart-item" key={item.id}>
              <img src={import.meta.env.VITE_IMG_URL + item.img} alt="" />
              <div className="cart-details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 50)} ...</p>
                <div className="cart-price">
                  {item.quantity} x ₹{item.price}
                </div>
              </div>
              <DeleteOutlinedIcon
                className="cart-delete"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="cart-total">
        <span>SUBTOTAL</span>
        <span>₹{totalPrice()}</span>
      </div>
      <div className="cart-btns">
        <button  className="proceed cart-btn " onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <button className="cart-reset cart-btn " onClick={() => dispatch(resetCart())}>
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
