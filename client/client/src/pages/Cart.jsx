import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Checkout from './Checkout'; 
import { useParams } from 'react-router-dom';

const API_BASE_URL = 'https://your-real-api-endpoint.com';

const Cart = () => {
  const { id } = useParams();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const incrementCounter = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCounter = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    axios.get(`${API_BASE_URL}/products/${id}`)
      .then(response => {
        const productWithQuantity = { ...response.data, quantity: 1 };
        setCartItems([productWithQuantity]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [id]);

  const deleteItem = (id) => {
    axios.delete(`${API_BASE_URL}/products/${id}`)
      .then(response => {
        console.log(response.data);
        setCartItems([]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
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
                              Quantity: {item.quantity}
                            </p>
                          </div>
                          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                              ${item.price.toFixed(2)} per unit
                            </p>
                            <div className="sm:order-1">
                              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                <button onClick={() => { decrementCounter(item.id) }} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                  -
                                </button>
                                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                  {item.quantity}
                                </div>
                                <button onClick={() => { incrementCounter(item.id) }} className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                          <button
                            onClick={() => { deleteItem(item.id) }}
                            type="button"
                            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                          >
                            Remove
                          </button>
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
