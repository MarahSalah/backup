import React from 'react'
import { useState } from 'react';

const AddProductForm = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
      Product_title: '',
        Product_description: '',
        Product_image:''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevOrder) => ({
          ...prevOrder,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
      };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">

        <form onSubmit={handleSubmit}>
        
       
        <div className="mt-4 grid items-center gap-3 gap-y-5 sm:grid-cols-2">
        <div className="flex flex-col ">
            
            <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
            Product Title
            </label>
                      <input
            className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
            name="Product_title"
            id="Product_title"
            type='text'
            placeholder='Name'
            value={formData.Product_title}
            onChange={handleInputChange}
            required
          />
          </div>

          <div className="col-span-1 flex flex-col">
            <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
            Product Description
            </label>
                    <input
          className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
          name="Product_description"
          id="Product_description"
          type='text'
          placeholder='Product_description'
          value={formData.Product_description}
          onChange={handleInputChange}
           required
        />
          </div>
          <div className="col-span-1 flex flex-col">
            <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
            Product Price
            </label>
                    <input
          className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
          name="Product_price"
          id="Product_price"
          type='text'
          placeholder='Product_price'
          value={formData.Product_price}
          onChange={handleInputChange}
           required
        />
          </div>
          <div className="col-span-1 flex flex-col">
            <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
            Product count
            </label>
                    <input
          className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
          name="Product_count"
          id="Product_count"
          type='text'
          placeholder='Product_count'
          value={formData.Product_count}
          onChange={handleInputChange}
           required
        />
          </div>
          <div className="col-span-1 flex flex-col">
            <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
            Product state
            </label>
                    <input
          className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
          name="Product_state"
          id="Product_state"
          type='text'
          placeholder='Product_state'
          value={formData.Product_state}
          onChange={handleInputChange}
           required
        />
          </div>
        <div className="flex flex-col ">
            <label className="mb-1 ml-3 font-semibold text-gray-500" htmlFor="">
            Product Image
            </label>
                    <input
          className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring"
          name="Product_image"
          id="Product_image"
          type='text'
          placeholder='your image'
          value={formData.Product_image}
          onChange={handleInputChange}
           required
        />
          </div>

        </div>
       
        <div className="flex flex-col justify-between sm:flex-row">
       
          {/* <Link to={'/NewOrders'}> */}
            <button type='submit' className="group my-2 flex w-full items-center justify-center rounded-lg bg-blue-900 py-2 text-center font-bold text-white outline-none transition sm:order-1 sm:w-40 focus:ring">
            ADD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-2 ml-4 h-4 w-4 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
          {/* </Link> */}
          <button className="group order-1 my-2 flex w-full items-center justify-center rounded-lg bg-gray-200 py-2 text-center font-bold text-gray-600 outline-none transition sm:w-40 focus:ring hover:bg-gray-300" 
          onClick={onCancel}>
            Cancel
          </button>
        </div>
        </form>


      </div>
    </div>
  );
};





export default AddProductForm