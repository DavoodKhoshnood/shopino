import React from "react";
import { Helmet } from "react-helmet-async";
import Advertisement from "../components/Advertisement";
import ProductListSlide from "../components/ProductListSlide";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Shopino</title>
      </Helmet>
      <Advertisement />
      <h2>New Products</h2>
      <ProductListSlide />
    </div>
  );
};

export default Home;
