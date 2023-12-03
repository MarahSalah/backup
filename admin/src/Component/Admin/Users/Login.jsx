import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import LogValidate from './LogValidate';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);

  const navigate=useNavigate();
    const [values,setValues]=useState({ email:'', password:''});
    const [error,setError]=useState({});
    
    // Handle the change in inputs
    const handleInputs=(e)=>{
        setValues({...values, [e.target.name]: e.target.value}) ;       
       
    }
   // Handle submit for the form
  const handleSubmit = async (e) => {
    e.preventDefault();
  

   
      try {
        // Make a POST request to your API endpoint
        const response = await axios.post('http://localhost:3001/login', values);

        // Check the response status code and handle it accordingly
      
          // Login was successful
          console.log('Login successful:', response.data);
          navigate("/dashboard");
      
      } catch (error) {
        // Handle network or other errors
        console.error('Login error:', error);
      
    }
  };


  return (


<>
    
<div className=" mx-auto flex justify-center h-[45rem] max-w-lg flex-col md:max-w-none md:flex-row  md:pr-10 md:my-10 lg:my-10 my-96 ">

<div className=" max-w-md rounded-3xl bg-gradient-to-t from-[#219C90] via-[#219C90] to-[#42a399] px-4 py-20 text-white sm:px-10 md:m-6 md:mr-8 ">
<p className="mb-28 font-bold tracking-wider">CargoNexa</p>
<p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug ">
  Welcome Back to <br /> CargoNexa
</p>
<p className="mb-28 leading-relaxed text-gray-200">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi
  voluptas a officia. Omnis.
</p>

</div>
<form onSubmit={handleSubmit} className=" px-4 py-20 ">
<h2 className="mb-2 text-3xl font-bold">Sign In</h2>
<Link to="/registration" className="mb-10 block font-bold text-gray-600">
  Create an account
</Link>

<p className="mb-1 font-medium text-gray-500">Email</p>
<div className="mb-4 flex flex-col">
  <div className="focus-within:border-[#219C90] relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
    <input
      type="email"
      onChange={handleInputs}
      className="w-full border-gray-300 bg-white  md:pr-24 px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
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


<button type='submit' className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-[#219C90] to-[#219C90] px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
  Login 
</button>
</form></div>


</>
  )
}

export default Login