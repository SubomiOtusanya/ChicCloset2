import React from 'react';
import TopSection from '../Components/Home/TopSection';
import Slider from '../Components/Home/Slider.jsx';
import Categories from '../Components/Home/Categories.jsx';
import PopularProduct from '../Components/PopularProduct.jsx';
import Banner from '../Components/Banner.jsx';

const Home = () => {
  return (
    <>
      <TopSection />
      <Slider />
      <Categories />
      <PopularProduct />
      <Banner />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
