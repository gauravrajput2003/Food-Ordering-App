import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearcart } from '../Utils/cartSlice';

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  
  // State to track if cart is cleared
  const [isCartCleared, setIsCartCleared] = useState(false);

  const handleClear = () => {
    dispatch(clearcart());
    setIsCartCleared(true); // Set cart as cleared
  };

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>
        Welcome to Your Cart Section😋
      </h1>
      <div className='w-6/12 m-auto'>
        {cartitems.length === 0 && !isCartCleared ? (
          <p className='font-bold text-black'>
            Your cart is feeling lonely!! Fill it up with some spicy😋
          </p>
        ) : (
          <ItemList items={cartitems} />
        )}
      </div>

      {/* Conditionally render the "Clear Cart" button or the quote message */}
      {!isCartCleared && cartitems.length > 0 && (
        <button
          className='bg-black text-white rounded w-20 h-10 text-center shadow-md font-medium hover:bg-green-400'
          onClick={handleClear}
        >
          Clear Cart
        </button>
      )}

      {/* Show message or options after cart is cleared */}
      {isCartCleared && (
        <div>
          <p className='font-bold text-black'>
            Your cart is empty now! Time to add some delicious items!
          </p>
          <button className='bg-blue-500 text-white rounded p-2 m-2'>
            Explore Menu
          </button>
          <button className='bg-green-500 text-white rounded p-2 m-2'>
            Add Items to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

 