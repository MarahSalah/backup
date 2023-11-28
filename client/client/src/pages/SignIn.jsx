import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
import axios from 'axios';

const SignIn = () => {
    const setCookie = (name, value) => {
        const cookieValue = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + '; path=/';
        document.cookie = cookieValue;
      };

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: formData.email,
        password: formData.password
      });
      setCookie('accessToken', response.data);
      console.log('Login Success', response.data);

      window.location.href = '/'; 
    } catch (error) {
      console.error('failed', error);
    }
  };

  const formStyle = {
    border: "1px solid #000842",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  };

  const inputStyle = {
    border: "1px solid #A5A5A5",
    borderRadius: "8px",
    padding: "2.5px",
    height: "3rem",
    color: "rgb(92, 92, 66)",
  };

  return (
    <section className="bg-[#fffff] dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img src={logo} className="w-[12rem] self-center  whitespace-nowrap dark:text-white" alt=" Logo" />
        </a>
        <div style={formStyle} className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  style={inputStyle}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  style={inputStyle}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex space-x-4 flex-col items-center">
                <button
                  type="button"
                  onClick={handleLogin}
                  style={{ background: "rgb(247, 36, 87)", border: "2px solid #A5A5A5", borderRadius: "8px", color: "white", height: "3rem", width: "100%" }}>
                  Sign in
                </button>
              </div>
            </form>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
