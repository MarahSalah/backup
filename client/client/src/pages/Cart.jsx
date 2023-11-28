import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
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
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const productsWithQuantity = response.data.map(product => ({ ...product, quantity: 1 }));
        setCartItems(productsWithQuantity);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const deleteItem = (id) => {
    axios.delete(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        console.log(response.data);
        setCartItems(cartItems.filter((item) => item.id !== id));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const maxItemsToShow = 3;

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
                  {cartItems.slice(0, maxItemsToShow).map(item => (
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
                              ${item.price * item.quantity}
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
    </div>
  );
};

export default Cart;
