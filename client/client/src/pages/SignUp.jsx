import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from '../assets/logo.jpg';

const SignUp = () => {
  const [f_name, setfirstName] = useState("");
  const [l_name, setlastName] = useState("");

  const [userlocation, setlocation] = useState("");
  const [usernumber, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSignUp = async () => {

    const setCookie = (name, value) => {
        const cookieValue = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + '; path=/';
        document.cookie = cookieValue;
      };

    if (!agreeToTerms) {
      alert("You must agree to the terms of service.");
      return;
    }

    // if (password !== confirmPassword) {
    //   setPasswordError("Passwords do not match");
    //   return;
    // } else if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
    //   setPasswordError("Password must be at least 8 characters and include numbers, lowercase and uppercase letters, and special characters.");
    //   return;
    // } else {
    //   setPasswordError("");
    // }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = await axios.post("http://localhost:8080/register", {
       f_name,
       l_name,
        email,
        password,
        phone_number: usernumber,
      });
      setCookie('accessToken', response.data);
      console.log("success register", response.data);
      setRegistrationMessage("Register suceess");
      setShowSuccessModal(true);
      window.location.href= '/';
    } catch (error) {
      console.error("Regster Failed", error);
      setRegistrationMessage("Regster Failed");
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const signInWithGoogle = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

//   const handleGoogleSignUp = () => {
//     window.location.href = "http://localhost:3001/google";
//   };

  return (
    <section style={{ background: "rgb(255,252,252)" }} className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          <img src={logo} style={{ width: "8rem" }} alt=" Logo" />
        </a>
        
        <div style={{ borderRadius: "8px", border: "1px solid #A5A5A5", boxShadow: "0px 0px 10px rgb(255, 252, 252)", padding: "20px", background: "(#fffcfc)" }} className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
            <h1 style={{ color: "(#fffff)" }} className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up for a new account
            </h1>
            <form className="space-y-2 md:space-y-2">
              <div>
                <label htmlFor="f_name" style={{ color: "rgb(92, 92, 66)" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input
                  type="text"
                  name="f_name"
                  id="f_name"
                  style={{ background: "white", border: "1px solid #A5A5A5", borderRadius: "8px", padding: "2.5px", height: "3rem", color: "rgb(92, 92, 66)" }}
                  value={f_name}
                  onChange={(e) => setfirstName(e.target.value)}
                  className="bg-(#fffff) border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="User Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="l_name" style={{ color: "rgb(92, 92, 66)" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input
                  type="text"
                  name="l_name"
                  id="l_name"
                  style={{ background: "white", border: "1px solid #A5A5A5", borderRadius: "8px", padding: "2.5px", height: "3rem", color: "rgb(92, 92, 66)" }}
                  value={l_name}
                  onChange={(e) => setlastName(e.target.value)}
                  className="bg-(#fffff) border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="User Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" style={{ color: "rgb(92, 92, 66)" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  style={{ background: "white", border: "1px solid #A5A5A5", borderRadius: "8px", padding: "2.5px", height: "3rem", color: "rgb(92, 92, 66)" }}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-(#fffff) border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
              </div>
              <div>
                <label htmlFor="password" style={{ color: "rgb(92, 92, 66)" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  style={{ background: "white", border: "1px solid #A5A5A5", borderRadius: "8px", padding: "2.5px", height: "3rem", color: "rgb(92, 92, 66)" }}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-(#fffff) border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
              </div>
              <div>
                <label htmlFor="confirm-password" style={{ color: "rgb(92, 92, 66)" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input
                  type="password"
                  name="confirm-password"
                  style={{ background: "white", border: "1px solid #A5A5A5", borderRadius: "8px", padding: "2.5px", height: "3rem", color: "rgb(92, 92, 66)" }}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-(  #fffff) border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            
              <div>
                <label htmlFor="phone" style={{ color: "rgb(92, 92, 66)" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  style={{ background: "white", border: "1px solid #A5A5A5", borderRadius: "8px", padding: "2.5px", height: "3rem", color: "rgb(92, 92, 66)" }}
                  id="phone"
                  value={usernumber}
                  onChange={(e) => setphone(e.target.value)}
                  className="bg-(#fffff) border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="agreeToTerms" style={{ color: "rgb(92, 92, 66)" }} className="block text-sm font-medium text-gray-900 dark:text-white">
                  I agree to the <Link to="/terms" className="text-primary-600 hover:underline">terms of service</Link>
                </label>
              </div>
              <div className="flex space-x-4 flex-col items-center">
                <button
                  type="button"
                  onClick={handleSignUp}
                  style={{ background: "rgb(247, 36, 87)", border: "2px solid #A5A5A5", borderRadius: "8px", color: "white", height: "3rem", width: "100%" }}>
                  Sign Up
                </button>
              </div>
            </form>
            {registrationMessage && (
              <div className={`mt-4 ${showSuccessModal ? "flex" : "hidden"}`}>
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 w-full">
                  <p className="font-bold">Success</p>
                  <p>{registrationMessage}</p>
                  <button className="mt-2 text-sm underline" onClick={handleCloseSuccessModal}>
                    Close
                  </button>
                </div>
              </div>
            )}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center mt-4">
              Already have an account? <Link to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
