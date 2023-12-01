import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import "./Cart.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const stripePromise = loadStripe(
    "pk_test_51NUrsQSEzfM6UcbCXN1wutEA4PzZufZyTHBSsL35Iw6N9SCA62q6QpiBdFEMzf2XsHFQKG5StV2QxmaPUYof4mWO00jxSlnSS6"
  );
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const makeProductsDoc = () => {
    var productsDoc = [];
    products.forEach((item) => {
      const element = {
        product: item.id,
        quantity: item.quantity,
      };
      productsDoc.push(element);
    });
    console.log(productsDoc);
    return productsDoc;
  };

  const handlePayment = async () => {
    try {
      const orderRes = await makeRequest.post("/order/create", {
        products: makeProductsDoc(),
        totalPrice: totalPrice(),
      });
      const stripeRes = await makeRequest.post("/payment", {
        products,
        shippingAddressCollection: "required",
      });
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({
        sessionId: stripeRes.data.id,
      });
    } catch (error) {
      console.log("Payment process failed:", error);
    }
  };

  return (
    <div className="cart">
      {user.id !== "" ? (
        <>
          {products.length === 0 ? (
            <h1>Cart is empty</h1>
          ) : (
            <h1>Products in your cart</h1>
          )}
          <div className="cart-products">
            {products?.map((item) => (
              <div className="cart-item" key={item.id}>
                <Link className="link" to={`/product/${item.id}`}>
                  <img src={item.img} alt="" />
                  <div className="cart-details">
                    <h1>{item.title}</h1>
                    <p>{item.description?.substring(0, 50)} ...</p>
                    <div className="cart-price">
                      {item.quantity} x ₹{item.price}
                    </div>
                  </div>
                </Link>
                <DeleteOutlinedIcon
                  className="cart-delete"
                  onClick={() => {
                    dispatch(removeItem(item.id));
                    toast("Product removed from cart!", {
                      duration: 2000,
                      icon: "🗑️",
                    });
                  }}
                />
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>SUBTOTAL</span>
            <span>₹{totalPrice()}</span>
          </div>
          <div className="cart-btns">
            <button className="proceed cart-btn " onClick={handlePayment}>
              PROCEED TO CHECKOUT
            </button>
            <button
              className="cart-reset cart-btn "
              onClick={() => {
                if (products.length === 0) {
                  toast("Cart is already empty!", {
                    duration: 2000,
                    icon: "🗑️",
                  });
                  return;
                }
                toast((t) => (
                  <span
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    Are you sure want to empty the cart?
                    <button
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#FF5353",
                        color: "white",
                        cursor: "pointer",
                        padding: "0.5rem",
                      }}
                      onClick={() => {
                        dispatch(resetCart());
                        toast.dismiss(t.id);
                        toast("Cart emptied!", {
                          duration: 2000,
                          icon: "🗑️",
                        });
                      }}
                    >
                      Yes!
                    </button>
                    <button
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "green",
                        color: "white",
                        cursor: "pointer",
                        padding: "0.5rem",
                      }}
                      onClick={() => toast.dismiss(t.id)}
                    >
                      No!
                    </button>
                  </span>
                ));
              }}
            >
              Empty Cart
            </button>
          </div>
        </>
      ) : (
        <h1>
          Please <Link to="/auth/login">Login</Link> or{" "}
          <Link to="/auth/signup">Signup</Link> to see your cart
        </h1>
      )}
    </div>
  );
};

export default Cart;
