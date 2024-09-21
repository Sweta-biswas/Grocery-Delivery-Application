import React from 'react';
// Importing icons from 'react-icons' as a replacement for 'lucide-react'
import { FaClock, FaShoppingBag, FaTruck, FaMobileAlt, FaAppleAlt, FaCarrot, FaGlassWhiskey, FaFish } from 'react-icons/fa';
// Using 'react-router-dom' for link navigation instead of 'next/link'


export default function Component() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-600">Why Choose PantryBasket?</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
              <div className="flex flex-col items-center space-y-2 border-2 border-green-200 p-4 rounded-lg">
                <FaClock className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold text-green-600">Lightning Fast</h3>
                <p className="text-sm text-center text-gray-500">Delivery in 10 minutes or less</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-green-200 p-4 rounded-lg">
                <FaTruck className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold text-green-600">Free Delivery</h3>
                <p className="text-sm text-center text-gray-500">No minimum order required</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-green-200 p-4 rounded-lg">
                <FaShoppingBag className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold text-green-600">Wide Selection</h3>
                <p className="text-sm text-center text-gray-500">Thousands of products to choose from</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-green-200 p-4 rounded-lg">
                <FaMobileAlt className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold text-green-600">Easy Ordering</h3>
                <p className="text-sm text-center text-gray-500">User-friendly app and website</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-600">Shop by Category</h2>
            <div className="grid ml-20 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  alt="Fruits"
                  className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  height="300"
                  src="https://media.istockphoto.com/id/529664572/photo/fruit-background.jpg?s=612x612&w=0&k=20&c=K7V0rVCGj8tvluXDqxJgu0AdMKF8axP0A15P-8Ksh3I="
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-2xl font-bold text-white">Fruits</h3>
                </div>
                <FaAppleAlt className="absolute top-4 left-4 h-8 w-8 text-white" />
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  alt="Vegetables"
                  className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  height="300"
                  src="https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-2xl font-bold text-white">Vegetables</h3>
                </div>
                <FaCarrot className="absolute top-4 left-4 h-8 w-8 text-white" />
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  alt="Dairy"
                  className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  height="300"
                  src="https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-2xl font-bold text-white">Dairy</h3>
                </div>
                <FaGlassWhiskey className="absolute top-4 left-4 h-8 w-8 text-white" />
              </div>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  alt="Meat & Fish"
                  className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                  height="300"
                  src="https://static.toiimg.com/photo/101288661.cms"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-2xl font-bold text-white">Meat & Fish</h3>
                </div>
                <FaFish className="absolute top-4 left-4 h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </section>
       
      </main>
    </div>
  );
}
