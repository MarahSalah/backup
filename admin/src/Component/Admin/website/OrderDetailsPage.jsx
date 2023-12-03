import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EditForm from './EditOrderForm';
// import EditForm from './EditOrderForm'; 


const OrderDetailsPage = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const { orderId } = useParams();
      
console.log('Order ID:', orderId);

      const [orderDetails, setOrderDetails] = useState([]);
      const [driverData, setdriverData] = useState([]);
      
      const [editOrder, setEditOrder] = useState(null);
      const [isEditOrderPopupOpen, setIsEditOrderPopupOpen] = useState(false);

      // useEffect(() => {
      //   // Fetch order details using Axios based on the order ID
      //   axios.get(`http://localhost:3001/order/${orderId}`)
       
      //     .then(response => {
      //       // Set the fetched order details to the state
      //       setOrderDetails(response.data);
      //     })
      //     .catch(error => {
      //       console.error('Error fetching order details:', error);
      //     });
      // }, [orderId]);

      useEffect(() => {
        // Fetch initial data when the component mounts
        fetchDriverData();
        fetchData();
      }, []);
    
    
        const fetchDriverData = async () => {
        // Fetch order details using Axios based on the order ID
        axios.get(`http://localhost:3001/driver/1`)
        
       
          .then(response => {
            // Set the fetched order details to the state
            setdriverData(response.data);
          

          })
          .catch(error => {
            console.error('Error fetching driver details:', error);
          })};
    
        const fetchData = async () => {
           // Fetch order details using Axios based on the order ID
           axios.get(`http://localhost:3001/order/${orderId}`)
       
           .then(response => {
             // Set the fetched order details to the state
             setOrderDetails(response.data);
           })
           .catch(error => {
             console.error('Error fetching order details:', error);
           });
          }

//edit handle for Order data **********************************************************************************************
const handleOrderEditClick = async (e) => {
  e.preventDefault();
  try {

    console.log('Fetching order data...');
    const response = await axios.get(`http://localhost:3001/order/${orderId}`);
    console.log('Order data:', response.data);
    
    // Set the edit order and open the edit popup
    setEditOrder(response.data);
    setIsEditOrderPopupOpen(true);
  } catch (error) {
    console.error('Error fetching order data:', error);
  }
};


const handleOrderEditSubmit = async (editedOrderData) => {
  try {
    // Make a PUT request to update the driver data
    await axios.put(`http://localhost:3001/order/${editOrder.id}`, editedOrderData); // Replace with your API endpoint
    // Close the edit popup and fetch the updated data
    setIsEditOrderPopupOpen(false);
    fetchData(); // Implement a function to fetch data from your API
  } catch (error) {
    console.error('Error updating order data:', error);
  }
};
  //     const [showEditForm, setShowEditForm] = useState(false);

  // const handleEditButtonClick = () => {
  //   setShowEditForm(true);
  // };

  // const handleCloseEditForm = () => {
  //   setShowEditForm(false);
  // };


  return (
   
 


<>
  {/* component */}
 
  <div className="my-8 mx-4 sm:mx-8 p-4 border border-gray-300 shadow-lg shadow-gray-300 rounded-lg">
    <h2 className="md:text-xl font-bold mb-4 ml-2 sm:ml-16">Tracking ID : {orderDetails.id}</h2>
    <div className="relative block p-3 overflow-hidden rounded-lg ml-2 mr-2 sm:ml-0 sm:mr-0">
      <a
        className="relative block p-6 sm:p-8 overflow-hidden border bg-white border-gray-300 rounded-lg ml-2 mr-2 sm:ml-6 sm:mr-6"
        href=""
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-my-green via-orange-300 to-my-green" />
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="mb-4 sm:mb-0">
            <h5 className="md:text-xl font-bold text-slate-900">
             {orderDetails.order_title}
            </h5>
            <p className="mt-1 text-xs font-medium text-slate-600">{orderDetails.order_description} </p>
          </div>
          <div className="flex-shrink-0 hidden sm:block">
            <img
              className="object-cover w-24 h-24 rounded-lg shadow-sm"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>

         <div>
          <strong>
         Shipper Data
          </strong>
          <div className='bg-my-green h-1 w-28'></div>
        </div>
        <dl className="flex flex-col sm:flex-row mt-3 text-center">
          <div className="flex flex-col-reverse mb-2 sm:mb-0">
            <dt className="text-sm font-medium text-slate-600">{orderDetails.full_name}</dt>
            <dd className="text-xs text-slate-500">Full Name</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600"> {orderDetails.receiver_name}</dt>
            <dd className="text-xs text-slate-500">Receiver Name</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{orderDetails.phone_number}</dt>
            <dd className="text-xs text-slate-500">Phone Number</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{orderDetails.receiver_phone_number}</dt>
            <dd className="text-xs text-slate-500">Receiver Phone Number</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{orderDetails.receiver_phone_number}</dt>
            <dd className="text-xs text-slate-500">Receiver Phone Number</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{orderDetails.receiver_phone_number}</dt>
            <dd className="text-xs text-slate-500">Receiver Phone Number</dd>
          </div>
        </dl>

        <div className='mt-5 '>
          <strong>
          Receiver Data
          </strong>
          <div className='bg-my-green h-1 w-28'></div>
        </div>

        <dl className="flex flex-col sm:flex-row mt-3 text-center">
          <div className="flex flex-col-reverse mb-2 sm:mb-0">
            <dt className="text-sm font-medium text-slate-600">{orderDetails.full_name}</dt>
            <dd className="text-xs text-slate-500">Full Name</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600"> {orderDetails.receiver_name}</dt>
            <dd className="text-xs text-slate-500">Receiver Name</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{orderDetails.phone_number}</dt>
            <dd className="text-xs text-slate-500">Phone Number</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{orderDetails.receiver_phone_number}</dt>
            <dd className="text-xs text-slate-500">Receiver Phone Number</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{orderDetails.receiver_phone_number}</dt>
            <dd className="text-xs text-slate-500">Receiver Phone Number</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{orderDetails.receiver_phone_number}</dt>
            <dd className="text-xs text-slate-500">Receiver Phone Number</dd>
          </div>          

        </dl>

        {/* The Edit Component With the props */}
        {/* {showEditForm && (
        <EditForm onClose={handleCloseEditForm} orderDetails={orderDetails} />
      )} */}

          {isEditOrderPopupOpen && (
            <EditForm
              order={editOrder}
              isOpen={isEditOrderPopupOpen}
              onClose={() => setIsEditOrderPopupOpen(false)}
              onSubmit={handleOrderEditSubmit}
            />
          )}

        {orderDetails.status === 'shipped' ? (
           <>
        <div className='mt-5 '>
          <strong>
          Driver Data
          </strong>
          <div className='bg-my-green h-1 w-24'></div>
        </div>

        <dl className="flex flex-col sm:flex-row mt-3 text-center">
          <div className="flex flex-col-reverse mb-2 sm:mb-0">
            <dt className="text-sm font-medium text-slate-600">{driverData.driver_username}</dt>
            <dd className="text-xs text-slate-500">Full Name</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600"> {driverData.plate_number}</dt>
            <dd className="text-xs text-slate-500">Receiver Name</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{driverData.truck_type}</dt>
            <dd className="text-xs text-slate-500">Phone Number</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{driverData.driver_license}</dt>
            <dd className="text-xs text-slate-500">Receiver Phone Number</dd>
          </div>
          <div className="flex flex-col-reverse ml-0 sm:ml-6">
            <dt className="text-sm font-medium text-slate-600">{driverData.driver_email}</dt>
            <dd className="text-xs text-slate-500">Receiver Phone Number</dd>
          </div>

        </dl>

          <button style={{ display: 'none' }}>Edit</button>
          <button style={{ display: 'none' }}>Delete</button>
        </>
      ) : (
        // If status is not shipped, show edit and delete buttons
        <div className='font-bold flex justify-start mt-5 md:text-xl'>
           <button
            className='bg-rounded-xl px-7 py-2 mr-5 text-white'
            onClick={handleOrderEditClick} >
            Edit
          </button>
        <button className='bg-red-700 rounded-xl px-5 text-white'>Delete</button>
          </div> 
      )}
       



          <div className='font-bold text-right md:text-xl'>
          Totle : 20 JD
          </div>
          
        {/* Add the image here for small screens */}
        <div className="sm:hidden mt-4 ">
          <img
            className="object-cover w-full rounded-lg shadow-sm h-36"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </a>
    </div>
  </div>
   

   {/* Time line for status  */}
 
<section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-5 lg:mb-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
        Track Your Shippment 
      </p>
    </div>
    <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-10 lg:max-w-3xl lg:grid-cols-3">
      <li className="flex-start group relative flex lg:flex-col">
        <span
          className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
          aria-hidden="true"
        />
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 group-hover:text-white"
          >
            <path
              d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ml-6 lg:ml-0 lg:mt-10">
          <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
          Shipping Soon
          </h3>
          <h4 className="mt-2 text-base text-gray-700">
          Order in Progress
          </h4>
        </div>
      </li>
      {/* <li className="flex-start group relative flex lg:flex-col">
        <span
          className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
          aria-hidden="true"
        />
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 group-hover:text-white"
          >
            <path
              d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}
        {/* <div className="ml-6 lg:ml-0 lg:mt-10">
          <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
          Shipped

          </h3>
          <h4 className="mt-2 text-base text-gray-700">
          Package in route to destination
          </h4>
        </div> */}
      {/* </li> */}
      <li className="flex-start group relative flex lg:flex-col">
        <span
          className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
          aria-hidden="true"
        />
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 group-hover:text-white"
          >
            <path
              d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ml-6 lg:ml-0 lg:mt-10">
          <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
          Out for Delivery
          </h3>
          <h4 className="mt-2 text-base text-gray-700">
          On the way to your location
          </h4>
        </div>
      </li>
      <li className="flex-start group relative flex lg:flex-col">
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 group-hover:text-white"
          >
            <path
              d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ml-6 lg:ml-0 lg:mt-10">
          <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
          Delivered
          </h3>
          <h4 className="mt-2 text-base text-gray-700">
          Shipment successfully received
          </h4>
        </div>
      </li>
    </ul>
  </div>
</section>

</>

  
  )
}

export default OrderDetailsPage