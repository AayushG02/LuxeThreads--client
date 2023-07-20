import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Cart from "../Cart/Cart"
import "./Navbar.css";


const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false)
  const products = useSelector((state)=>state.cart.products);
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="navbar-left">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <Link className="link" to="/">
            LUXETHREADS
          </Link>
        </div>
        <div className="navbar-right">
          <div className="icons">
            <SearchSharpIcon />
            <PersonOutlineSharpIcon />
            <FavoriteBorderSharpIcon />
            <div className="cartIcon" onClick={()=> setIsOpened(!isOpened)} >
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {isOpened && <Cart />}
    </nav>
  );
};

export default Navbar;
