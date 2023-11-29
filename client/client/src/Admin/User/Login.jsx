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
    const errors = LogValidate(values);
    setError(errors);

    // Check if there are any validation errors before sending the data
    if (Object.keys(errors).length === 0) {
      try {
        // Make a POST request to your API endpoint
        const response = await axios.post('http://localhost:3001/login', values);

        // Check the response status code and handle it accordingly
        if (response.status === 200) {
          // Login was successful
          console.log('Login successful:', response.data);
          navigate("/");
          // You can redirect the user or perform other actions here
        } else {
          // Handle other status codes or error scenarios
          console.error('Login failed:', response.data);
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Login error:', error);
      }
    }
  };


  return (
//     < div className='h-[50rem] bg-gray-100'>
//     <h1 className='pt-10 pb-10  font-bold text-blue-900 md:text-4xl text-center'>Login </h1>
//     <div className='flex justify-center  mx-10'>
//     <form action='' onSubmit={handleSubmit} className='bg-white text-black px-20 py-5 rounded-xl w-full max-w-lg border border-gray-300 '>
    
//       <div className='m-4'>
//         <label htmlFor='author' className='m-2 font-semibold text-blue-900'>
//           Email
//         </label>
//         <input type='text' name='email' onChange={handleInputs} className=' text-black w-full border border-gray-300' required/>
//         {error.email && <p style={{color:"red"}}>{error.email}</p>}
//       </div>
//       <div className='m-4'>
//         <label htmlFor='title' className='m-2 font-semibold text-blue-900'>
//           Password
//         </label>
//         <input type='text' name='password' onChange={handleInputs} className=' text-black w-full border border-gray-300' required/>
//         {error.password && <p style={{color:"red"}} >{error.password}</p>}
      
//       </div>
      
//       <button
//         type='submit'
//         className=' bg-[#FFC436] hover:bg-[#f1c357] text-blue-900  focus:ring-4 focus:outline-none  font-medium rounded-lg  p-2  ml-10 md:ml-32 mt-4'
// >Login
//       </button>
//     </form>
//     </div>
//     </div>



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