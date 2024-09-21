import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch, FaMapMarkerAlt, FaBars } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const toggleProfileDropdown = () => setShowProfileDropdown(!showProfileDropdown);
  const toggleCartDropdown = () => setShowCartDropdown(!showCartDropdown);
  const toggleLocationDropdown = () => setShowLocationDropdown(!showLocationDropdown);

  return (
    <nav className="bg-green-500 p-4 shadow-2xl shadow-slate-700/50 fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="PantryBasket Logo" 
            className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto"
          />
          <div className="text-white">
            <h1 className="text-2xl sm:text-3xl font-bold">PantryBasket</h1>
            <p className="text-sm sm:text-base">Your Pantry, Our Priority</p>
          </div>
        </Link>

        {/* Conditional rendering based on the current route */}
        {location.pathname === '/' && (
          <>
            <div className="sm:hidden flex items-center ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white mr-4"
              >
                <FaBars />
              </button>
            </div>

            <div className={`flex-grow mx-4 hidden sm:flex sm:space-x-4`}>
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search Products."
                  className="w-full py-2 px-4 pr-10 rounded-full"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <FaSearch className="text-gray-600" />
                </button>
              </div>
              <div className="relative">
                <button
                  className="py-2 px-4 rounded-full bg-white text-gray-800 flex items-center"
                  onClick={toggleLocationDropdown}
                >
                  <FaMapMarkerAlt className="mr-2 text-gray-600" />
                  Enter Location
                </button>
                {showLocationDropdown && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-10">
                    {/* Location Dropdown Content */}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button
                  className="text-white flex items-center"
                  onClick={toggleCartDropdown}
                >
                  <FaShoppingCart className="mr-1" />
                  <span className="hidden sm:inline">Cart</span>
                </button>
                {showCartDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link to="/cart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Cart</Link>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  className="text-white flex items-center"
                  onClick={toggleProfileDropdown}
                >
                  <FaUser className="mr-1" />
                  <span className="hidden sm:inline">Hi Guest</span>
                </button>
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link to="/login-register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login/Register</Link>
                    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Orders</Link>
                    <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                    <Link to="/contact-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact Us</Link>
                    <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
