import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Success from "./pages/Success/Success";
import Failed from "./pages/Failed/Failed";
import Wishlist from "./pages/Wishlist/Wishlist";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const LoginLayout = () => {
  return (
    <div className="app">
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
