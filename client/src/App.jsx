import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProductSearch from "./pages/ProductSearch/ProductSearch";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Success from "./pages/Success/Success";
import Failed from "./pages/Failed/Failed";
import Wishlist from "./pages/Wishlist/Wishlist";

import "./App.css";

const Layout = () => {
  return (
    <div className="app">
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const LoginLayout = () => {
  return (
    <div className="app">
      <Toaster />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductSearch />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/failed",
        element: <Failed />,
      },
    ],
  },
  {
    path: "/auth",
    element: <LoginLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
