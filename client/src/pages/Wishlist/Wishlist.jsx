import { useSelector } from "react-redux";
import "./Wishlist.css";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const { user } = useSelector((state) => state.user);
  const { wishlist } = useSelector((state) => state.user.user);
  return (
    <div className="cart">
      {user.id !== "" ? (
        wishlist?.length === 0 ? (
          <h1>Wishlist is empty</h1>
        ) : (
          <>
            <h1>Products in your wishlist</h1>
            <div className="wishlist-products">
              {wishlist?.map((item) => (
                <Card key={item._id} item={item} />
              ))}
            </div>
          </>
        )
      ) : (
        <h1>
          Please <Link to="/auth/login">Login</Link> or{" "}
          <Link to="/auth/signup">Signup</Link> to see your wishlist
        </h1>
      )}
    </div>
  );
};

export default Wishlist;
