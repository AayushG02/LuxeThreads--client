import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../redux/userReducer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Card.css";
import { makeRequest } from "../../../makeRequest";
import toast from "react-hot-toast";

const Card = ({ item, close }) => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.user.user);
  const { user } = useSelector((state) => state.user);
  const isExist = wishlist.find((product) => product._id === item._id);

  const handleFavorite = async () => {
    if (user.id === "") {
      toast.error("Please login to add to wishlist", {
        duration: 2000,
      });
      return;
    }
    try {
      if (isExist) {
        dispatch(removeFromWishlist(item._id));
        await makeRequest.delete(`/user/wishlist/${item._id}`);
      } else {
        dispatch(addToWishlist(item));
        await makeRequest.post(`/user/wishlist/${item._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card-wrapper">
        <Link className="link" to={`/product/${item?._id}`}>
          <div className="card" onClick={close}>
            <div className="card-img">
              {item?.isNewProduct && <span>New Season</span>}
              <img src={item?.images[0]} className="first" />
              <img src={item?.images[1]} className="second" />
            </div>
            <h2>{item?.title}</h2>
          </div>
        </Link>
        <div className="prices">
          <h3 className="old-price price">₹{item?.price + 300}</h3>
          <h3 className="price">₹{item?.price}</h3>
          <FavoriteIcon
            className={`favorite ${isExist ? "wishlisted" : ""}`}
            onClick={handleFavorite}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
