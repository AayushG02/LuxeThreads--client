import React, { useState } from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import carousel1 from "../../assets/carousel1.jpeg";
import carousel2 from "../../assets/carousel2.webp";
import carousel3 from "../../assets/carousel3.webp";

import "./Carousel.css";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 2 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 2 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentIndex * 100}vw` }}
        >
          <img src={carousel1} />
          <img src={carousel2} />
          <img src={carousel3} />
        </div>
        <div className="prev-btn" onClick={handlePrev}>
          <ArrowBackOutlinedIcon className="icon" />
        </div>
        <div className="next-btn" onClick={handleNext}>
          <ArrowForwardOutlinedIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
