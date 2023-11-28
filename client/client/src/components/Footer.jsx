import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <>
    <footer class=" dark:bg-gray-900 bg-[#27283d]">
        <div class="mx-auto w-full max-w-screen-xl p-8 py-12 lg:py-12">
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-2">
                <img src={logo} class="w-[6rem] self-center  whitespace-nowrap dark:text-white"/>
              </div>
              <div class=" grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                      <ul class="text-[#fffff] font-normal text-white dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <Link to='/' class="hover:underline">Home</Link>
                          </li>
                          {/* <li class="mb-4">
                              <Link to='/shopall' class="hover:underline">Shop All</Link>
                          </li> */}
                      </ul>
                  </div>
                  <div>
                      <ul class="text-[#fffff] font-normal text-white dark:text-gray-400 font-medium">
                          <li>
                              <Link to='/aboutus' class="hover:underline">About Us</Link>
                          </li>
                          <li>
                            <Link to='/contactus' class="hover:underline">Contact Us</Link>                          </li>
                          </ul>
                  </div>
                  <div>
                      <ul class="text-[#fffff] font-normal text-white dark:text-gray-400 font-medium">
                          <li class="text-[#fffff] mb-4">
                              <Link to='/' class="hover:underline">Privacy Policy</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr class="my-6 border-[#fffff] sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-[#fffff] text-sm text-white sm:text-center dark:text-gray-400">© 2023 <Link to='/' class="hover:underline">Giftyfy™</Link>. All Rights Reserved.
              </span>
              <div class=" flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                  <a href="#" class="text-[#fffff] text-white hover:text-gray-900 dark:hover:text-white">Facebook</a>
                  <a href="#" class="text-[#fffff] text-white hover:text-gray-900 dark:hover:text-white">Instagram</a>
              </div>
          </div>
        </div>
    </footer>

    </>
  )
}

export default Footer;
