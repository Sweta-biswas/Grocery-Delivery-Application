import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-white p-8 mt-8 border-t">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-green-500 text-3xl font-bold mb-4">PantryBasket</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-green-500">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-500">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Delivery Areas</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Customer Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Press</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Terms of Use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Responsible Disclosure Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-500">Mojo - a Zepto Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="font-semibold mb-2">Download App</h3>
            <div className="space-y-2">
              <a href="#" className="inline-block">
                <img src="https://designfornative.com/content/images/2023/01/Google-Play-cover-image.png" alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="#" className="inline-block">
                <img src="https://logowik.com/content/uploads/images/apple-store6683.jpg" alt="Get it on App Store" className="h-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © PantryBasket Technologies Private Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;