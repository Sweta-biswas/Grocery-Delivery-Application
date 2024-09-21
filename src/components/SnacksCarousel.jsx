import React from 'react';
import Slider from 'react-slick'; // React Slick for the carousel functionality
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SnacksCarousel = () => {
  const products = [
    { name: "Doritos Cheese Nachos", price: "₹30", image: "https://m.media-amazon.com/images/I/71ufQAQCpFL.jpg" },
    { name: "Lay's Spanish Tomato Chips", price: "₹28", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIq6fMnttFty4e-dJaTvxD-oxNonCFP7ZS8w&s" },
    { name: "Gopal Salted Peanuts", price: "₹28", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvZaRUaxGbImq-1XpdHu8y5AncETupxV5Kw&s" },
    { name: "Lay's Cream & Onion Potato Chips", price: "₹27", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CEcTauCAbAyjv5icmLkXpql8IY5ofma-FA&s" },
    { name: "Mukharochak Lite Chivda Namkeen", price: "₹60", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/ac89111c-be22-4383-bc78-a514bc7c1329.jpg?ts=1707847404" },
    { name: "Haldiram's Lite Murmura", price: "₹110", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/94432a.jpg?ts=1688628110" },
    { name: "Mukhorochok Chanachur", price: "₹66", image: "https://thestateplate.com/cdn/shop/products/mukharochaksweetandsourchanachurkolkatawestbengal.png?v=1680931448" },
    { name: "Haldiram's Prabhuji Bhujia", price: "₹34", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/375554a.jpg?ts=1671600861" },
    { name: "Uncle Chipps", price: "₹20", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/11150a.jpg?ts=1688463551" },
    { name: "Kurkure Namkeen", price: "₹20", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhsG6OcE-xatUkfYmM5uJkDCojkJD8IMTjQ&s" },
    { name: "Bikano Aloo Bhujia", price: "₹41", image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/mmsqddtptefh8trf5amb" },
    { name: "Bharat Masala Papad", price: "₹44", image: "https://www.bharatmasala.in/wp-content/uploads/2021/05/PAPAD.png" },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-carousel container mx-auto p-4">
      <h2 className="text-2xl sm:text-xl font-bold mb-6 mt-6 text-center">Snacks & Munchies</h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-2">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img src={product.image} alt={product.name} className="h-40 w-full object-contain mb-2" />
              <h3 className="text-lg font-semibold text-center">{product.name}</h3>
              <p className="text-green-500 font-bold text-center">{product.price}</p>
              <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded">ADD</button>
            </div>
          </div>
        ))}
      </Slider>
      <section className="py-16 mt-12 bg-green-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-2xl font-semibold mb-6">Ready to start shopping?</h2>
          <p className="text-xl sm:text-lg mb-8">Download our app now and get 20% off your first order!</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Download for iOS
            </button>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Download for Android
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SnacksCarousel;
