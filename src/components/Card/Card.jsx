import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ item }) => {
  const IMG = import.meta.env.VITE_IMG_URL;
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="card-img">
          {item.attributes.isNew && <span>New Season</span>}
          <img
            src={IMG + item.attributes.img.data.attributes.url}
            className="first"
          />
          <img
            src={IMG + item.attributes.img2.data.attributes.url}
            className="second"
          />
        </div>
        <h2>{item.attributes.title}</h2>
        <div className="prices">
          <h3 className="old-price price">
            ₹{item.attributes.oldPrice || item.attributes.price + 300}
          </h3>
          <h3 className="price">₹{item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
