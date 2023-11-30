import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Navbar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Navbar = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const toggleSidebar = () => {
    setIsSidebarOpened(!isSidebarOpened);
  };
  const toggleSearch = () => {
    setIsSearchOpened(!isSearchOpened);
    const timeoutID = setTimeout(() => {
      setIsSearchOpened(false);
    }, 10000);
    return () => {
      clearTimeout(timeoutID);
    };
  };
  const showProfile = () => {
    setIsProfileOpened(true);
    const timeoutID = setTimeout(() => {
      setIsProfileOpened(false);
    }, 10000);
    return () => {
      clearTimeout(timeoutID);
    };
  };
  const hideProfile = () => {
    setIsProfileOpened(false);
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
            {isSearchOpened && <Search toggle={toggleSearch} />}
            <div className="search-icon" onClick={toggleSearch}>
              <SearchSharpIcon />
            </div>
            {isProfileOpened && <ProfileMenu hide={hideProfile} />}
            <div className="profile-icon" onMouseEnter={showProfile}>
              <PersonOutlinedIcon />
            </div>
            <Link className="wishlist-link link" to="/wishlist">
              <div className="wishlist-icon">
                <FavoriteBorderIcon />
              </div>
            </Link>
            <Link className="cart-link link" to="/cart">
              <div className="cart-icon">
                <ShoppingBagOutlinedIcon />
                <span>{products.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
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
            <div className="sidebar-item">
              <Link className="link" to="/wishlist">
                <div>Wishlist</div>
              </Link>
            </div>
            <div className="sidebar-item">
              <Link className="link" to="/cart">
                <div>Cart</div>
              </Link>
            </div>
            <div className="sidebar-item">
              <Link className="link" to="/orders">
                <div>Orders</div>
              </Link>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Navbar;
