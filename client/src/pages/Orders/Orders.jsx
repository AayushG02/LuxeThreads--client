import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { formatDistanceToNow } from "date-fns";
import { useSelector } from "react-redux";

const Orders = () => {
  const { user } = useSelector((state) => state.user);
  if (user.id !== "") {
    var {
      data: products,
      loading,
      error,
    } = useFetch(`${import.meta.env.VITE_API_URL}/order`);
  }
  return (
    <div className="order-container">
      <h1 className="order-header">Your Orders</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {products?.length !== 0 ? (
        <div className="order-list">
          {products?.map((item) => (
            <div key={item._id} className="order-item">
              <div className="order-item-header">
                <h3>Order Id: {item._id}</h3>
                <h3>
                  Ordered{" "}
                  {formatDistanceToNow(new Date(item.createdAt), {
                    addSuffix: true,
                  })}
                </h3>
                <h3>Total Price: {item.totalPrice}</h3>
              </div>
              <div className="order-item-products">
                {item.products.map((product, index) => (
                  <div key={index} className="order-item-product">
                    <img src={product.product.images[0]} alt="" />
                    <div className="order-item-product-details">
                      <h3>{product.product.title}</h3>
                      <p>Quantity: {product.quantity}</p>
                      <p>Price: {product.product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No orders yet</h1>
      )}
    </div>
  );
};

export default Orders;
