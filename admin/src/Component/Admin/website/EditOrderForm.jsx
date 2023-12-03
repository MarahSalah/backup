// // EditForm.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EditForm = ({ onClose, orderDetails }) => {
//   const [editedData, setEditedData] = useState(orderDetails);
//   console.log("edit data",editedData)
//   console.log("edit data",orderDetails.id)
  
//   useEffect(() => {
//     // Fetch the order details when the component mounts
//     const fetchOrderDetails = async () => {
//       try {  
//         const response = await axios.get(`http://localhost:3001/order/${orderDetails.id}`);
//         // Assuming the API returns order details as JSON
//         setEditedData(response.data);
//       console.log("axios",response.data)

//       } catch (error) {
//         console.error('Error fetching order details:', error);
//       }
//     };

//     fetchOrderDetails();
//   }, [orderDetails.id]);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Update the order details using Axios
//       await axios.put(`http://localhost:3001/order/${orderDetails.id}`, editedData);
//       // Close the form after successful update
//       onClose();
//     } catch (error) {
//       console.error('Error updating order:', error);
//       // Handle error appropriately (e.g., show error message to the user)
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className="bg-black opacity-50 fixed inset-0"></div>
//       <div className="bg-white p-6 rounded-lg z-10">
//         <h2 className="text-2xl font-bold mb-4">Edit Order</h2>
//         <form onSubmit={handleFormSubmit}>
//           <div className="mb-4">
//             <label htmlFor="editedField" className="block text-sm font-medium text-gray-600">
//               Edited Field
//             </label>
//             <input
//               type="text"
//               id="editedField"
//               name="editedField"
//               value={editedData.editedField || ''}
//               onChange={(e) => setEditedData({ ...editedData, editedField: e.target.value })}
//               className="mt-1 p-2 border rounded-md w-full"
//             />
//           </div>

//           {/* Add more form fields as needed */}

//           <div className="flex justify-end">
//             <button type="submit" className="bg-my-green text-white px-4 py-2 rounded-md mr-2">
//               Save
//             </button>
//             <button type="button" onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditForm;





import React, { useEffect, useState } from 'react'

const EditForm = ({ order, isOpen, onClose, onSubmit }) => {
    const [editedOrder, setEditedOrder] = useState(order);

  useEffect(() => {
    setEditedOrder(order);
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
  };

 
  
  return (
    isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-white w-96 p-6 rounded-lg z-10 my-6">
            <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(editedOrder); }}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Order Name</label>
                <input
                  type="text"
                  name="order_title"
                  value={editedOrder.order_title}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Driver Email</label>
                <input
                  type="text"
                  name="driver_email"
                  value={editedOrder.driver_email}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"> Driver Password</label>
                <input
                  type="text"
                  name="driver_password"
                  value={editedOrder.driver_password}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Driver Driver License</label>
                <input
                  type="text"
                  name="driver_license"
                  value={editedOrder.driver_license}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Driver Truck Type</label>
                <input
                  type="text"
                  name="truck_type"
                  value={editedOrder.truck_type}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Driver Production Year</label>
                <input
                  type="text"
                  name="production_year"
                  value={editedOrder.production_year}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
             */}
            
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-my-green text-white py-2 px-4 rounded-full hover:bg-teal-400 focus:outline-none focus:shadow-outline-blue"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    );
  };
  

  

export default EditForm