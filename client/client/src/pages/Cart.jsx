import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = () => {
    axios.get('http://localhost:8080/Cart')
      .then(response => {
        setCartItems(response.data); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleIncrement = (itemId) => {
    axios.put(`http://localhost:8080/Cart/${itemId}`, { action: 'increment' })
      .then(() => {
        fetchCartData();
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  const handleDecrement = (itemId) => {
    axios.put(`http://localhost:8080/Cart/${itemId}`, { action: 'decrement' })
      .then(() => {
        fetchCartData();
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  const handleRemove = (itemId) => {
    axios.delete(`http://localhost:8080/Cart/${itemId}`)
      .then(() => {
        fetchCartData();
      })
      .catch(error => {
        console.error('Error removing item:', error);
      });
  };

  return (
    <div>
      <section className="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>
          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
            <div className="bg-white shadow">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div className="shrink-0">
                        <img
                          className="h-24 w-24 max-w-full rounded-lg object-cover"
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                      <div className="relative flex flex-1 flex-col justify-between">
                        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div className="pr-8 sm:pr-5">
                            <p className="text-base font-semibold text-gray-900">
                              {item.name}
                            </p>
                            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                              Count: {item.count}
                            </p>
                          </div>
                          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <button onClick={() => handleDecrement(item.id)} className="bg-gray-200 p-2 rounded-md">-</button>
                            <p className="mx-2 text-base font-semibold text-gray-900">{item.count}</p>
                            <button onClick={() => handleIncrement(item.id)} className="bg-gray-200 p-2 rounded-md">+</button>
                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                              Total: ${item.price * item.count}
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                          <button onClick={() => handleRemove(item.id)} className="bg-red-500 p-2 rounded-md text-white">Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

     
      <Checkout cartItems={cartItems} />
    </div>
  );
};

export default Cart;
