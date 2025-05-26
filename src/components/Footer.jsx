import React from 'react';
import email from '../assets/email.svg';
import  phone from '../assets/phone.svg';
import { div } from 'framer-motion/client';


const Footer = () => {
  return (

   <div className='flex flex-col items-center'>
    <div className="container mt-[200px]">
        <ul className="flex items-start justify-around flex-wrap">
            <li className="text-[35px] text-[black] font-Inter font-medium">
                Contact Us
                <ul className="flex flex-col space-y-[15px] mt-[20px]">
                    <li className=" flex">
                    <img src={email} alt="email" className="w-[18px]"/>
                    <p className="text-[12px] font-RedHatText ml-[20px] font-light">example@gmail.com</p>
                    </li>

                    <li className=" flex">
                    <img src={phone} alt="phone" className="w-[18px]"/>
                    <p className="text-[12px] font-RedHatText ml-[20px] font-light">+213-123456789</p>
                    </li>
                </ul>
            </li>

            <li >
             <p className="font-RedHatText text-[14px] text-[black] font-semibold">Quick Links</p>
              <ul className="flex flex-col space-y-[10px] ml-[5px] mt-[15px]">
              <li>
              <a href="/shop" className="text-[black] font-regular text-[12px] hover:text-green-500 transition duration-300">
                Shop
              </a>
            </li>
            <li>
              <a href="/events" className="text-black font-regular text-[12px] hover:text-green-500 transition duration-300">
                Events
              </a>
            </li>
            <li>
              <a href="/contact-us" className="text-black font-regular text-[12px] hover:text-green-500 transition duration-300">
                Contact Us
              </a>
            </li>
             </ul>
            </li>
            <li className="font-RedHatText text-[14px] text-[black] font-semibold"> Categories</li>
        </ul>
    </div>
    <div className="w-[90%] border-b-1 border-[black] mb-[30px] mt-[30px]"></div>
    <ul className="pl-16 flex self-start space-x-[30px] mb-[100px]">
        <li className="font-RedHatText text-[13px] font-light text-[black]">© 2025 Releaf. All rights reserved.</li>
        <li className="font-RedHatText text-[13px] font-light text-[black]">Privacy Policy</li>
        <li className="font-RedHatText text-[13px] font-light text-[black]">Terms of Service</li>
        <li className="font-RedHatText text-[13px] font-light text-[black]">Cookie Settings</li>
    </ul>

</div> 
    
  );
};

export default Footer;
