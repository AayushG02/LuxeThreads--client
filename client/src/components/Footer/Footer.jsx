import React from "react";
import paymentImg from "../../assets/payment.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="top">
          <div className="footer-item">
            <h1 className="footer-header">Categories</h1>
            <Link className="link" to="/products/1">
              <span>Men</span>
            </Link>
            <Link className="link" to="/products/2">
              <span>Women</span>
            </Link>
            <Link className="link" to="/products/3">
              <span>New Arrivals</span>
            </Link>
          </div>
          <div className="footer-item">
            <h1 className="footer-header">Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="footer-item">
            <h1 className="footer-header">About</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus minima eos, rem architecto expedita, natus harum
              labore ad quaerat fuga consectetur maiores facilis repudiandae
              quam.
            </span>
          </div>
          <div className="footer-item">
            <h1 className="footer-header">Contact</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              officia harum magni quam cum earum excepturi? Praesentium eum
              minus, recusandae debitis quidem esse dolorem tempora.
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <p className="logo">LUXETHREADS</p>
            <p className="copyright">© Copyright 2023. All Rights Reserved</p>
          </div>
          <img
            src={paymentImg}
            className="payment-img"
            alt="accepted payment methods"
          />
        </div>
        <p className="made-with-love">
          Made with ❤️ by
          <Link
            target="_blank"
            to="https://github.com/AayushG02"
            style={{ margin: "0 4px" }}
          >
            Aayush
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
