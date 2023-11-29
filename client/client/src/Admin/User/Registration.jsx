
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import RegValidate from './RegValidate';
import { Link } from 'react-router-dom';

const Registration = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const [values,setValues]=useState({ user_username:'' , user_email:'', user_password:''});
const [error,setError]=useState({});

// Handle the change in inputs
const handleInputs=(e)=>{
    setValues({...values, [e.target.name]: e.target.value}) ;       
   console.log("values",values)
}

// Handle submit for the form 
const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = RegValidate(values);
    setError(errors);

    // Check if there are any validation errors before sending the data

    try {
      console.log("first")
      // Make a POST request to your API endpoint
      const response = await axios.post('http://localhost:3001/register', values)
        // Registration was successful
        console.log('Registration successful:', response.data);
   
    } catch (error) {
      // Handle network or other errors
      console.error('Registration error:', error);
    }
  
}

  return (
    // < div className='h-[50rem] bg-gray-100'>
    // <h1 className='pt-10 pb-10  font-bold text-blue-900 md:text-4xl text-center'>Registration </h1>
    // <div className='flex justify-center  mx-10'>
    // <form action='' onSubmit={handleSubmit} className='bg-white text-blue-900  px-20 py-5 rounded-xl w-full max-w-lg border border-gray-300 '>
    
    //   <div className='m-4'>
    //     <label htmlFor='author'  className='m-2 font-semibold'>
    //       First-Name
    //     </label>
    //     <input type='text'  name='firstname' onChange={handleInputs} className='text-black w-full border border-gray-300 ' required/>
    //   </div>
    //   <div className='m-4'>
    //     <label htmlFor='author' className='m-2 font-semibold'>
    //     Last-Name
    //     </label>

        
    //     <input type='text'   name='lastname' onChange={handleInputs} className='text-black w-full border border-gray-300' required/>
    //   </div>
    //   <div className='m-4'>
    //     <label htmlFor='author' className='m-2 font-semibold'>
    //       Email
    //     </label>
    //     <input type='text'  name='email' onChange={handleInputs} className='text-black w-full border border-gray-300' required/>
    //      {error.email && <p style={{color:"red"}}>{error.email}</p>}
    //   </div>
    //   <div className='m-4'>
    //     <label htmlFor='title' className='m-2 font-semibold'>
    //       Password
    //     </label>
    //     <input type='text'  name='password' onChange={handleInputs} className='text-black w-full border border-gray-300' required/>
    //     {error.password && <p style={{color:"red"}} >{error.password}</p>}
    //   </div>
    //   <div className='m-4'>
    //     <label htmlFor='title' className='m-2 font-semibold'>
    //       Confirm-Password
    //     </label>
    //     <input type='text'  name='confirmPassword'  onChange={handleInputs} className='text-black w-full border border-gray-300' required/>
    //     {error.confirmPassword && <p style={{color:"red"}}>{error.confirmPassword}</p>}
    //   </div>
      
    //   <button
    //     type='submit'
    //     className=' bg-[#FFC436] hover:bg-[#f1c357] text-blue-900  focus:ring-4 focus:outline-none font-medium rounded-lg  p-2  ml-[30%]  mt-4 '

    //   >
    //    Create account
    //   </button>
    // </form>
    // </div>
    // </div>

    <>
    
    <div className=" mx-auto flex justify-center h-[45rem] max-w-lg flex-col md:max-w-none md:flex-row  md:pr-10 md:my-10 lg:my-10 my-96 ">

  <div className=" max-w-md rounded-3xl bg-gradient-to-t from-[#219C90] via-[#219C90] to-[#42a399] px-4 py-20 text-white sm:px-10 md:m-6 md:mr-8 ">
    <p className="mb-28 font-bold tracking-wider">CargoNexa</p>
    <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug ">
      Start your 
      shipping<br /> with us
    </p>
    <p className="mb-28 leading-relaxed text-gray-200">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi
      voluptas a officia. Omnis.
    </p>
    {/* <div className="bg-[#219C90] rounded-2xl px-4 py-8">
      <p className="mb-3 text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea
        voluptates sapiente!
      </p>
      <div className="">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
            alt="Simon Lewis"
          />
          <p className="ml-4 w-56">
            <strong className="block font-medium">Simon Lewis</strong>
            <span className="text-xs text-gray-200">
              {" "}
              Published 12 Bestsellers{" "}
            </span>
          </p>
        </div>
      </div>
    </div> */}
  </div>
  <form onSubmit={handleSubmit} className=" px-4 py-20 ">
    <h2 className="mb-2 text-3xl font-bold">Registration</h2>
    <Link to="/login" className="mb-10 block font-bold text-gray-600">
      Have an account
    </Link>
   
    <p className="mb-1 font-medium text-gray-500">Username</p>
    <div className="mb-4 flex flex-col">
      <div className="focus-within:border-[#219C90] relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input
          type="text"
          onChange={handleInputs}
          className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none md:pr-24"
          placeholder="Enter your username"
          name='user_username'
        />
      </div>
    </div>
    <p className="mb-1 font-medium text-gray-500">Email</p>
    <div className="mb-4 flex flex-col">
      <div className="focus-within:border-[#219C90] relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input
          type="email"
          onChange={handleInputs}
          className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
          placeholder="Enter your email"
          name='user_email'
        />
      </div>
    </div>
    {error.user_email && <p style={{color:"red"}}>{error.user_email}</p>}

    <p className="mb-1 font-medium text-gray-500">Password</p>
    <div className="mb-4 flex flex-col">
      <div className="focus-within:border-[#219C90] relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input
          type="password"
          onChange={handleInputs}
          className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
          placeholder="Choose a password (minimum 8 characters)"
          name='user_password'
        />
      </div>
    </div>
    {error.user_password && <p style={{color:"red"}} >{error.user_password}</p>}

    <p className="mb-1 font-medium text-gray-500">Confirm Password</p>
    <div className="mb-4 flex flex-col">
      <div className="focus-within:border-[#219C90] relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input
          type="password"
          onChange={handleInputs}
          className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
          placeholder="Write the same password again"
          name='user_confirmpassword'
        />
      </div>
    </div>
    {error.user_confirmpassword && <p style={{color:"red"}}>{error.user_confirmpassword}</p>}
    
    <button type='submit' className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-[#219C90] to-[#219C90] px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
      Sign Up
    </button>
  </form></div>


    </>
  )
}

export default Registration