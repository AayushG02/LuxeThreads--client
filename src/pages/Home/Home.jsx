import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Banner from "../../components/Banner/Banner";
const Home = () => {
  return (
    <>
      <Carousel />
      <FeaturedProducts type={2} />
      <Banner />
      <FeaturedProducts type={1} />
    </>
  );
};

export default Home;
