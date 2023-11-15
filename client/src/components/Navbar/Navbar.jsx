import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Navbar.css";
const Navbar = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const toggleSidebar = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };
  const toggleSearch = () => {
    setIsSearchOpened(!isSearchOpened);
  };
  return (
    <>
      <nav className="navbar">
        <div className="wrapper">
          <div className="navbar-left">
            <button className="navbar-btn" onClick={toggleSidebar}>
              <MenuOutlinedIcon />
            </button>
            <Link className="link" to="/">
              <div className="navbar-header">LUXETHREADS</div>
            </Link>
            <div className="navbar-item">
              <Link className="link" to="/products/1">
                <div>Men</div>
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="link" to="/products/2">
                <div>Women</div>
              </Link>
            </div>
            <div className="navbar-item">
              <Link className="link" to="/products/3">
                <div>New Season</div>
              </Link>
            </div>
          </div>
          <div className="navbar-right">
            <div
              className="search-icon"
              onClick={toggleSearch}
            >
              <SearchSharpIcon />
            </div>
            <Link className="link" to="/cart">
              <div className="cart-icon">
                <ShoppingBagOutlinedIcon />
                <span>{products.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {isSearchOpened && <Search toggle = {toggleSearch}/>}
      {isSidebarOpened && (
        <aside className="sidebar">
          <div className="sidebar-wrapper">
            <div className="sidebar-item">
              <Link className="link" to="/">
                <div>Home</div>
              </Link>
            </div>
            <div className="sidebar-item">
              <Link className="link" to="/products/1">
                <div>Men</div>
              </Link>
            </div>
            <div className="sidebar-item">
              <Link className="link" to="/products/2">
                <div>Women</div>
              </Link>
            </div>
            <div className="sidebar-item">
              <Link className="link" to="/products/3">
                <div>New Season</div>
              </Link>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Navbar;
