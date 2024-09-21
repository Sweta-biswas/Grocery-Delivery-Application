import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import loginImage from '../assets/login-image.jpg'; // Add your login illustration
import backgroundImage from '../assets/background.jpg'; // Add your background image

const LoginRegister = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen p-4 sm:p-8">
        <div className="bg-white shadow-md rounded-md flex flex-col md:flex-row max-w-4xl w-full">
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <img
              src={loginImage}
              alt="Login"
              className="w-full h-64 md:h-full object-cover rounded-t-md md:rounded-t-none md:rounded-l-md"
            />
          </div>
          
          {/* Right side - Login Form */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">LOGIN / REGISTER</h2>
            <input
              type="email"
              placeholder="Email ID"
              className="w-full py-2 px-4 mb-4 border-b border-gray-300 focus:outline-none focus:border-green-500"
            />
            <button className="w-full py-2 px-4 bg-orange-500 text-white rounded-md mb-6 hover:bg-orange-600">
              CONTINUE
            </button>
            <div className="flex items-center justify-center mb-6">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-3 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <button className="w-full py-2 px-4 bg-white text-gray-800 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
            <p className="text-center mt-6 text-sm text-gray-600">
              By continuing you agree to our{' '}
              <Link to="/terms" className="text-blue-500 hover:underline">
                T&C/Disclaimer
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
