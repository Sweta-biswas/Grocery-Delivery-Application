import React from 'react';
import Slider from 'react-slick'; // React Slick for the carousel functionality
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = () => {
  const products = [
    { name: "Amul Fresh Malai Paneer", price: "₹91", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdV55X8mnTY-ZYp8dO6cxcT_WQrqLL-PR5Q&s" },
    { name: "Moreish Classic White Bread", price: "₹32", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/4a465d8d-f618-4798-a5a8-c687f1c2ee9e.jpg?ts=1708593040" },
    { name: "Amul Taaza Toned Fresh Milk", price: "₹28", image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143" },
    { name: "Amul Masti Curd", price: "₹35", image: "https://www.jiomart.com/images/product/original/490254092/amul-masti-dahi-400-g-pouch-product-images-o490254092-p590032902-0-202203151650.jpg?im=Resize=(1000,1000)" },
    { name: "Amul Salted Butter", price: "₹285", image: "https://5.imimg.com/data5/GK/VS/GY/SELLER-75579188/salted-butter.jpg" },
    { name: "Amul Pure Mik Cheese", price: "₹131", image: "https://5.imimg.com/data5/SELLER/Default/2023/1/VR/KB/PI/92068182/frozen-amul-pure-milk-fresh-cheese.jpg" },
    { name: "Amul Mithai Mate Condensed Milk", price: "₹66", image: "https://m.media-amazon.com/images/I/71HyK7I2LFL.jpg" },
    { name: "Brown Bread", price: "₹34", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfau4D-W2Qf7C0iujCwvx9xf2IYzvfopRRg&s" },
    { name: "White Bread", price: "₹32", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmtoNRKMc7BSssFRSdSXzA0gAU8wLpsaCeA&s" },
    { name: "Amul Kool", price: "₹24", image: "https://www.jiomart.com/images/product/original/491582577/amul-kool-kesar-flavoured-milk-180-ml-bottle-product-images-o491582577-p491582577-0-202203152258.jpg?im=Resize=(1000,1000)" },
    { name: "Amul Fresh Cream", price: "₹91", image: "https://www.bigbasket.com/media/uploads/p/xxl/40102603_3-amul-fresh-cream-25-milk-fat-low-fat.jpg" },
    { name: "White Eggs", price: "₹44", image: "https://m.media-amazon.com/images/I/31g61yXoxTL.jpg" },
    // Add more products as needed
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
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="product-carousel container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4 mt-4">Dairy, Bread & Eggs</h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="h-40 w-full object-contain mb-2" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-green-500 font-bold">{product.price}</p>
              <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded">ADD</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
