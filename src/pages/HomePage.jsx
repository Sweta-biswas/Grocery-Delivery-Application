import React from 'react';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import ProductCard from '../components/ProductCard';
import ProductCarousel from '../components/ProductCarousel';
import SnacksCarousel from '../components/SnacksCarousel';

import PromotionalSection from '../components/PromotionalSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen pt-16"> 
        <Navbar />
        <ImageSlider />
        
        <div className="categories-section mt-2"> 
          <h1 className="text-3xl container mx-auto p-4 font-bold text-center text-green-500">Categories</h1>
          <ProductCard />
        </div>
        <PromotionalSection/>
        <ProductCarousel />
        <SnacksCarousel/>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
