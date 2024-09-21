import React from 'react';
import ShoppingCart from '../components/ShoppingCart';

const CartPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ShoppingCart />
    </div>
  );
};

export default CartPage;
