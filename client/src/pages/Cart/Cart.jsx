import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

import "./Cart.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


const Cart = () => {
  const products = useSelector((state) => state.cart.products);
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
      {products.length === 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        <h1>Products in your cart</h1>
      )}
      <div className="cart-products">
        {products?.map((item) => (
          <Link key={item.id} className="link" to={`/product/${item.id}`}>
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="cart-details">
                <h1>{item.title}</h1>
                <p>{item.description?.substring(0, 50)} ...</p>
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
        <button className="proceed cart-btn " onClick={handlePayment}>
          PROCEED TO CHECKOUT
        </button>
        <button
          className="cart-reset cart-btn "
          onClick={() => dispatch(resetCart())}
        >
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
