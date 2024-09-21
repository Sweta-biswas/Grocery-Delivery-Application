import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import your images
import slider from '../assets/slider.png';
import firstslider from '../assets/firstslider.png'
import secondslider from '../assets/secondslider.png'
import fourthslider from '../assets/fourthslider.png';
import fifthslider from '../assets/fifthslider.png'

export default function ImageSlider() {
  return (
    <div className="relative mb-2">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <div className="relative">
          <img
            src="https://www.choicemarthawaii.com/wp-content/uploads/2017/06/slider-1-min-1.jpg"
            alt="vegetable"
            className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full object-cover"
          />
        </div>
        <div className="relative">
          <img
            src={secondslider} // Use the imported image here
            alt="vegetable"
            className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full object-cover"
          />
        </div>
        <div className="relative">
          <img
            src={slider} // Use the imported image here
            alt="vegetable"
            className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full object-cover"
          />
        </div>
        <div className="relative">
          <img
            src={fourthslider} // Use the imported image here
            alt="vegetable"
            className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full object-cover"
          />
        </div>
        <div className="relative">
          <img
            src={fifthslider} // Use the imported image here
            alt="vegetable"
            className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full object-cover"
          />
        </div>
        <div className="relative">
          <img
            src={firstslider} // Use the imported image here
            alt="vegetable"
            className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-full object-cover"
          />
        </div>
        
      </Carousel>
    </div>
  );
}
