// // AddOrderForm.js
// import React, { useState } from 'react';

// const AddOrderForm = ({ onSubmit, onCancel }) => {
//   const [formData, setFormData] = useState({
//     order_title:'Equipment',
//     order_description:'Regardless of your industry, commodity, or main markets industry, commodity, or main markets',
//     name: '',
//     receiver_name: '',
//     order_phone_number: '',
//     receiver_phone_number: '',
//     shipping_location: '',
//     receiver_location: '',
//     shipping_date: '',
//     order_truck_size: '',
//     shipping_timestamp: '',
//     receiving_timestamp: '',
//     message: '',
//     contains_dangerous_materials: false,
//     status : "pending"

//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevOrder) => ({
//       ...prevOrder,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded shadow-md">

//         <form onSubmit={handleSubmit}>
//         <h1 className="text-2xl font-semibold">{formData.order_title}</h1>
//         <p className="mt-2 text-gray-500">
//         {formData.order_description}
//         </p>
       
//         <div className="mt-4 grid items-center gap-3 gap-y-5 sm:grid-cols-2">
//         <div className="flex flex-col ">
//             <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
//              Full Name
//             </label>
//                       <input
//             className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
//             name="full_name"
//             id="fullName"
//             type='text'
//             placeholder='Ahmad'
//             value={formData.full_name}
//             onChange={handleInputChange}
//             required
//           />
//           </div>
//           <div className="col-span-1 flex flex-col">
//             <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
//               Receiver Name
//             </label>
//                     <input
//           className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
//           name="receiver_name"
//           id="receiverName"
//           type='text'
//           placeholder='Sara'
//           value={formData.receiver_name}
//           onChange={handleInputChange}
//            required
//         />
       
//           </div>
//         <div className="flex flex-col ">
//             <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
//              phone number 
//             </label>
//                     <input
//           className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
//           name="order_phone_number"
//           id="phoneNumber"
//           type='text'
//           placeholder='+962'
//           value={formData.order_phone_number}
//           onChange={handleInputChange}
//            required
//         />

//           </div>
//           <div className="col-span-1 flex flex-col">
//             <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
//               Receiver phone number 
//             </label>
//                       <input
//             className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
//             name="receiver_phone_number"
//             id="receiverPhoneNumber"
//             type='text'
//             placeholder='+962'
//             value={formData.receiver_phone_number}
//             onChange={handleInputChange}
//              required
//           />

       
//           </div>
//           <div className="flex flex-col ">
//     <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
//         Shipping location
//     </label>
//           <select
//         className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
//         name="shipping_location"
//         id="shippingLocation"
//         value={formData.shipping_location}
//         onChange={handleInputChange}
//          required
//       >
//       <option value="">Select Governorate</option>
//         <option value="Irbid">Irbid</option>
//         <option value="Ajloun">Ajloun</option>
//         <option value="Jerash">Jerash</option>
//         <option value="Mafraq">Mafraq</option>
//         <option value="Balqa">Balqa</option>
//         <option value="Amman">Amman</option>
//         <option value="Zarqa">Zarqa</option>
//         <option value="Madaba">Madaba</option>
//         <option value="Karak">Karak</option>
//         <option value="Tafilah">Tafilah</option>
//         <option value="Ma'an">Ma'an</option>
//         <option value="Aqaba">Aqaba</option>
//     </select>
// </div>

//           <div className="col-span-1 flex flex-col">
//             <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
//             Receiving location
//             </label>
//             <select
//             className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
//             name="receiving_location"
//             id="receivingLocation"
//             value={formData.receiving_location}
//             onChange={handleInputChange}
//              required
//           >
//       <option value="">Select Governorate</option>
//         <option value="Irbid">Irbid</option>
//         <option value="Ajloun">Ajloun</option>
//         <option value="Jerash">Jerash</option>
//         <option value="Mafraq">Mafraq</option>
//         <option value="Balqa">Balqa</option>
//         <option value="Amman">Amman</option>
//         <option value="Zarqa">Zarqa</option>
//         <option value="Madaba">Madaba</option>
//         <option value="Karak">Karak</option>
//         <option value="Tafilah">Tafilah</option>
//         <option value="Ma'an">Ma'an</option>
//         <option value="Aqaba">Aqaba</option>
//     </select>
//           </div>
//           <div className="flex flex-col ">
//             <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
//             Shipping Date
//             </label>
//             <input
//             className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
//             name="shipping_date"
//             id="shippingDate"
//             type='date'
//             value={formData.shipping_date}
//             onChange={handleInputChange}
//              required
//           />
//           </div>
//           <div className="col-span-1 flex flex-col">
//             <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
//             Truck Size
//             </label>
//             <select
//             className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
//             name="order_truck_size"
//             id="truckSize"
//             value={formData.order_truck_size}
//             onChange={handleInputChange}
//              required
//           >
//             <option value="">Select Size</option>
//             <option value="Small">Small Truck (1 ton)</option>
//             <option value="Medium">Medium Truck (3-5 ton)</option>
//             <option value="Large">Large Truck (8-12 ton)</option>
//           </select>
//           </div>
       
//           <div className="flex flex-col ">
//             <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
//             Shipping Time            </label>
//             <input
//             className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
//             name="shipping_timestamp"
//             id="shippingTime"
//             type='time'
//             value={formData.shipping_timestamp}
//             onChange={handleInputChange}
//              required
//           />
//           </div>
//           <div className="col-span-1 flex flex-col">
//             <label
//               className="text-md font-semibold  text-gray-500"
//               htmlFor=""
//             >
//               Receiver Time
//             </label>
//             <input
//                 className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
//                 name="receiving_timestamp"
//                 id="receiving_timestamp"
//                 type='time'
//                 value={formData.receiving_timestamp}
//                 onChange={handleInputChange}
//                  required
//               />
//           </div>
       
//           <div className="col-span-1 flex flex-col">
//             <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
//            Message 
//             </label>
//             <input
//             className="rounded-lg border px-2 py-2 md:px-5 md:py-5 shadow-sm outline-none focus:ring"
//             name="message"
//             id="message"
//             type='text'
//             value={formData.message}
//             onChange={handleInputChange}
//           />
//           </div>
       
         
//         </div>
//         <br/>
      
//         <label className="mb-4 flex items-center" htmlFor="">
//         <input
//           className="accent-blue-700 mr-3 h-5 w-5"
//           type="checkbox"
//           name="contains_dangerous_materials"
//           id="containsDangerousMaterials"
//           checked={formData.contains_dangerous_materials}
//           onChange={handleInputChange}
          
//       />
//             The shipment does not contain any dangerous materials or foodstuffs!
//           </label>
//         <div className="flex flex-col justify-between sm:flex-row">
       
//           {/* <Link to={'/NewOrders'}> */}
//             <button type='submit' className="group my-2 flex w-full items-center justify-center rounded-lg bg-my-green py-2 text-center font-bold text-white outline-none transition sm:order-1 sm:w-40 focus:ring">
//             Continue
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="group-hover:translate-x-2 ml-4 h-4 w-4 transition-transform"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               />
//             </svg>
//           </button>
//           {/* </Link> */}
//           <button className="group order-1 my-2 flex w-full items-center justify-center rounded-lg bg-gray-200 py-2 text-center font-bold text-gray-600 outline-none transition sm:w-40 focus:ring hover:bg-gray-300" 
//           onClick={onCancel}>
//             Cancel
//           </button>
//         </div>
//         </form>


//       </div>
//     </div>
//   );
// };

// export default AddOrderForm;
