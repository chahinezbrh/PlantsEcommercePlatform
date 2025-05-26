import React from 'react'
import Navbar from '../components/Navbar';
import arrow from '../assets/arrow.svg';
import pfp from '../assets/pfp.svg';
import '../App.css';
import { useNavigate, useLocation} from 'react-router-dom';
import {useState, useRef } from 'react';
import right from '../assets/right.svg'


const PersonalInformation = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isActive =(path) => location.pathname === path;
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = () =>{
      
        fileInputRef.current.click(); // Open file dialog
      

    }

    const handleFileChange =(event) => {
       const file  = event.target.files[0];

       if (file){
        setSelectedImage(URL.createObjectURL(file));
       }
    };

   return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center">
        <img src={arrow} alt="" className="absolute left-10  w-10 " />
        <div className="flex flex-col justify-center items-center pt-10">
        <p className="text-center font-RedHatText text-[35px] font-normal  pl-40 ">Personal Information</p>
        <p className=" text-center font-RedHatText text-[25px] font-light w-160 pl-40 pt-3">Here’s an overview of your personal information and options for managing it.</p>
   
        </div>
    </div>

   <div className="flex">
           <img src={selectedImage || pfp}  alt="" className="absolute left-32  w-28 h-28 object-cover rounded-full"/>
   
           <ul className="space-y-5 absolute left-0 pt-40 ">
           <li>
               <button  onClick = {() => navigate('/personal-information') }  className={`text-[16px] font-light w-96 py-4 font-RedHatText transition duration-300 cursor-pointer
            ${isActive('/personal-information') 
              ? 'bg-[rgba(67,134,46,1)] text-white' 
              : 'hover:bg-[rgba(67,134,46,1)] hover:text-white'
            }`}>Personal Information</button>
           </li>
           <li>
               <button onClick = {() => navigate('/myproducts') }  className={`text-[16px] font-light w-96 py-4 font-RedHatText transition duration-300 cursor-pointer
            ${isActive('/myproducts') 
              ? 'bg-[rgba(67,134,46,1)] text-white' 
              : 'hover:bg-[rgba(67,134,46,1)] hover:text-white'
            }`}>My Products</button>
           </li>
   
           <li>
               <button onClick = {() => navigate('/myorders') }  className={`text-[16px] font-light w-96 py-4 font-RedHatText transition duration-300 cursor-pointer
            ${isActive('/myorders') 
              ? 'bg-[rgba(67,134,46,1)] text-white' 
              : 'hover:bg-[rgba(67,134,46,1)] hover:text-white'
            }`}>My Orders</button>
           </li>
   
           
   
           <li>
               <button  onClick = {() => navigate('/log-out') }  className={`text-[16px] font-light w-96 py-4 font-RedHatText transition duration-300 cursor-pointer
                ${isActive('/log-out') 
                ? 'bg-[rgba(67,134,46,1)] text-white' 
                : 'hover:bg-[rgba(67,134,46,1)] hover:text-white'
                }`}>Log Out</button>
           </li>
          
       </ul>
       </div>
       
       <p className="text-[30px] font-RedHatText  pt-20 pl-14 ">General Information</p>
        <div className="flex justify-center items-center  pl-90">
        <div className="border-[4px] border-white rounded-2xl  p-15">
            <ul className="space-y-7">
              <li className="font-RedHatText font-medium text-[15px]">profile photo</li>
              <li className="relative"> 
                  <input type="text" readOnly value ="change your profile photo"className=" relative bg-white text-[14px] text-[#6B7280] w-114 h-12 border-none  font-light pl-10  focus:outline-none" />
                  <img src={selectedImage || pfp }  onClick = {handleImageClick}alt="" className='w-10 h-10 cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 object-cover rounded-full ' />
                  <input  type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden"/>

              </li>
              
              <li className="font-RedHatText  font-medium text-[15px]">    Director's name</li>
              <li> <input type="text"  placeholder ="Director's name"className="bg-white text-[14px] w-114 h-12 border-none font-light pl-10 focus:outline-none" />
              </li>

              <li className="font-RedHatText font-medium text-[15px]">Contact number</li>
              <li> <input type="text"  placeholder ="Contact number"className="bg-white font-light text-[14px] w-114 h-12 pl-10 focus:outline-none" />
              </li>

              <li className="font-RedHatText font-medium text-[15px]">Location</li>
              <li> <input type="text"  placeholder ="Location"className="bg-white font-light text-[14px] w-114 h-12 pl-10 focus:outline-none " />
              </li>
            </ul>
            </div>
          </div>

          <p className="text-[30px] font-RedHatText  pt-20  ">Coordinates</p>
          <div className="flex justify-center items-center  pl-90">
            <div className="border-[4px] border-white rounded-2xl  p-15">
              <ul className="space-y-7">
              <li className="font-RedHatText font-medium text-[15px]">phone number</li>
              <li className="relative"> 
                  <input type="text" readOnly  value ="change your phone number" className=" relative bg-white text-[14px] w-114 h-12 border-none  font-light pl-10  focus:outline-none" />
                  <img src={right} alt="" onClick = {() => navigate('/change-number')} className=" w-10 cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2" />

              </li>

              <li className="font-RedHatText font-medium text-[15px]">Email</li>
              <li className="relative"> 
                  <input type="text"  placeholder ="change your email"className=" relative bg-white text-[14px]  w-114 h-12 border-none  font-light pl-10  focus:outline-none" />
                  <img src={right} alt=""  onClick = {() => navigate('/change-email')}  className=" w-10 cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2" />

              </li>
              </ul>
            </div>

          </div>
          <p className="text-[30px] font-RedHatText  pt-20  ">Password</p>
          <div className="flex justify-center items-center  pl-90">
           <div className="border-[4px] border-white rounded-2xl  p-15">
            <ul className="space-y-7">
              
                <li className="relative"> 
                    <input type="text"  readOnly  value ="change your password" className=" relative bg-white text-[14px] w-114 h-12 border-none  font-light pl-10  focus:outline-none" />
                    <img src={right} alt=""  onClick = {() => navigate('/change-password')}className=" w-10 cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2" />
                </li>

              
              </ul>
           </div>
          </div>
 
  
   

    </>
  )
};

export default PersonalInformation ;
