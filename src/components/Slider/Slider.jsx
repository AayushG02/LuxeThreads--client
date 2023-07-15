import React, { useState } from "react";
import "./Slider.css";

import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2: (prev) => prev - 1)
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className="slider">
      <div className="img-container" style={{transform: `translateX(-${currentSlide * 100}vw`}} >
        <img src={data[0]} />
        <img src={data[1]} />
        <img src={data[2]} />
      </div>
      <div className="icons-container">
        <div className="left-icon slider-icon" onClick={prevSlide}>
          <ChevronLeftSharpIcon />
        </div>
        <div className="right-icon slider-icon" onClick={nextSlide}>
          <ChevronRightSharpIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
