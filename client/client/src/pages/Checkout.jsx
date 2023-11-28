import React, { useState } from 'react';

const Checkout = ({ cartItems }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleBuyNow = () => {
    setShowCheckout(true);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleConfirmPurchase = () => {
    const orderDetails = cartItems.map(item => ({
      productId: item.id,
      count: item.quantity,
      totalPerUnit: item.price * item.quantity
    }));

    console.log('Order Details:', orderDetails);

 
  };

  return (
    <div>
      <div className="my-4">
        <button onClick={handleBuyNow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
      {showCheckout && (
        <div className="bg-white shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Checkout</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between">
            <span className="font-semibold">Total:</span>
            <span>${calculateTotal()}</span>
          </div>
          <button onClick={handleConfirmPurchase} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Confirm Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
