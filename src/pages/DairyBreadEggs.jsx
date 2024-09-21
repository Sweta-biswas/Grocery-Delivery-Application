import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import subcategoriesData from '../data/subcategories';

const DairyBreadEggs = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('Milk');

  const { subcategories, products } = subcategoriesData["Dairy, Bread & Eggs"];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dairy, Bread & Eggs</h1>
        <div className="flex">
          {/* Subcategories sidebar */}
          <div className="w-1/4 pr-4">
            {subcategories.map((subcategory, index) => (
              <div
                key={index}
                className={`flex items-center p-2 cursor-pointer ${selectedSubcategory === subcategory.name ? 'bg-green-100' : ''}`}
                onClick={() => setSelectedSubcategory(subcategory.name)}
              >
                <img src={subcategory.image} alt={subcategory.name} className="w-12 h-12 object-contain mr-2" />
                <span>{subcategory.name}</span>
              </div>
            ))}
          </div>

          {/* Product display */}
          <div className="w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{selectedSubcategory}</h2>
              <select className="border p-2">
                <option>Sort By: Relevance</option>
                <option>Price (Low to high)</option>
                <option>Price (High to low)</option>
                <option>Discount (High to low)</option>
                <option>Name (A to Z)</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products[selectedSubcategory]?.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="text-xs text-gray-600">{product.volume}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold">₹{product.price}</span>
                    <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">ADD</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DairyBreadEggs;
