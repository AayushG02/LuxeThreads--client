import React from "react";
import paymentImg from "../../assets/payment.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="footer-item">
          <h1 className="footer-header" >Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="footer-item">
          <h1 className="footer-header" >Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="footer-item">
          <h1 className="footer-header" >About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minima eos, rem architecto expedita, natus harum labore ad quaerat fuga consectetur maiores facilis repudiandae quam.
          </span>
        </div>
        <div className="footer-item">
          <h1 className="footer-header" >Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia harum magni quam cum earum excepturi? Praesentium eum minus, recusandae debitis quidem esse dolorem tempora.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <p className="logo">LUXETHREADS</p>
          <p className="copyright">
            © Copyright 2023. All Rights Reserved
          </p>
        </div>
        <div className="right">
          <img src={paymentImg} alt="accepted payment methods" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
