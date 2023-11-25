import { useSelector } from "react-redux";
import "./Wishlist.css";
import Card from "../../components/Card/Card";
const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.user.user);
  return (
    <div className="cart">
      {wishlist?.length === 0 ? (
        <h1>Wishlist is empty</h1>
      ) : (
        <h1>Products in your wishlist</h1>
      )}
      <div className="wishlist-products">
        {wishlist?.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
