import { useSelector, useDispatch } from "react-redux";
import "./Wishlist.css";
import Card from "../../components/Card/Card";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  console.log(wishlist);
  return (
    <div className="cart">
      {wishlist.length === 0 ? (
        <h1>Wishlist is empty</h1>
      ) : (
        <h1>Products in your wishlist</h1>
      )}
      <div className="wishlist-products">
        {wishlist?.map((item) => (
          <Card item={item} />
        ))}
      </div>

    </div>
  );
};

export default Wishlist;
