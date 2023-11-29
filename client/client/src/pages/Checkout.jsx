import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Checkout = ({ cartItems }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [recipientName, setRecipientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [giftMessage, setGiftMessage] = useState('');
  const [location, setLocation] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [buyNowClicked, setBuyNowClicked] = useState(false);
  const [purchaseClicked, setPurchaseClicked] = useState(false);

  const handleBuyNow = () => {
    setBuyNowClicked(true);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleConfirmPurchase = () => {
    setPurchaseClicked(true);

    setShowCheckout(false);
    setRecipientName('');
    setPhoneNumber('');
    setGiftMessage('');
    setLocation('');
    setDeliveryDate(null);
  };

  return (
    <div>
      {!buyNowClicked && (
        <div className="my-4">
          <button onClick={handleBuyNow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      )}

      {buyNowClicked && !purchaseClicked && (
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

      {purchaseClicked && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Enter Recipient Details</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700">Recipient Name:</label>
                <input
                  type="text"
                  id="recipientName"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="giftMessage" className="block text-sm font-medium text-gray-700">Gift Message:</label>
                <textarea
                  id="giftMessage"
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              
              <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Location</option>
              <option value="amman">Amman</option>
              <option value="zarqa">Zarqa</option>
              <option value="mafraq">Mafraq</option>
              <option value="irbid">Irbid</option>
              <option value="salt">Salt</option>
              <option value="balqaa">Balqaa</option>
              <option value="jerash">Jerash</option>
              <option value="ajloun">Ajloun</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">Delivery Date:</label>
            <DatePicker
              id="deliveryDate"
              selected={deliveryDate}
              onChange={(date) => setDeliveryDate(date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button type="submit" onClick={handleConfirmPurchase} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Confirm Purchase
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
