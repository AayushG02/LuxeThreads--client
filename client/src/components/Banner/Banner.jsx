import React from "react";
import banner from "../../assets/banner.webp";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Link className="link" to="/products/3">
      <div className="banner">
        <div className="banner-wrapper">
          <div className="banner-content">
            <div className="header-background">LUXETHREADS</div>
            <div className="header-foreground">#newarrivals</div>
          </div>
          <div className="banner-img">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Banner;
