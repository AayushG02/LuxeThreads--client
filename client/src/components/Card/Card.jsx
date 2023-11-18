import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ item, close }) => {
  return (
    <Link className="link" to={`/product/${item._id}`}>
      <div className="card" onClick={close}>
        <div className="card-img">
          {item.isNewProduct && <span>New Season</span>}
          <img
            src={item.images[0]}
            className="first"
          />
          <img
            src={item.images[1]}
            className="second"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3 className="old-price price">
            ₹{item.price + 300}
          </h3>
          <h3 className="price">₹{item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
