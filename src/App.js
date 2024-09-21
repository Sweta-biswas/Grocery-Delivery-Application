import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginRegister from './components/LoginRegister';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import UserProfilePage from './pages/UserProfilePage';
import FAQ from './components/FAQ';
import DairyBreadEggs from './pages/DairyBreadEggs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login-register" element={<LoginRegister/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/category/dairy-bread-eggs" element={<DairyBreadEggs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;