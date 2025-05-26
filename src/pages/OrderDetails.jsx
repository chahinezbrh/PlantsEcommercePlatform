import React from 'react';
import pfp from '../assets/pfp.svg';
import arrow from '../assets/arrow.svg';
import Navbar from '../components/Navbar.jsx';
import { useNavigate, useLocation} from 'react-router-dom';
import {useState, useRef } from 'react';
import email from '../assets/email.svg'
import phone from '../assets/phone.svg'
import orderdetailsplant from '../assets/product4.svg'

 



const plants = [
  {
    id: 1,
    name: "Snake plant",
    price: "290DA",
    quantity: 19,
    total: "1",
    image: orderdetailsplant, 
  },
  {
    id: 2,
    name: "Snake plant",
    price: "290DA",
    quantity: 19,
    total: "4",
    image: orderdetailsplant,
  },
  {
    id: 3,
    name: "Snake plant",
    price: "290DA",
    quantity: 19,
    total: "1",
    image: orderdetailsplant,
  }
 
]

const OrderDetails = () => {
    

    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState('Pending');
  
    const options = ['Pending', 'Shipped', 'Delivered'];
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleSelect = (option) => {
      setStatus(option);
      setIsOpen(false);
    };

    const navigate = useNavigate();
    const location = useLocation();
    const isActive =(path) => location.pathname === path;
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);


  return (
    <>

<Navbar/>
    <div className="flex justify-center items-center">
        <img src={arrow} alt="" className="absolute left-150 pb-9   w-10  cursor-pointer " onClick={() => navigate('/my-orders')} />
        <div className="flex flex-col justify-center items-center pt-10 pl-30">
        <p className="text-center font-RedHatText text-[35px] font-normal  pl-50 pb-2 ">Order Details</p>
        <p className=" text-center font-RedHatText text-[20px] font-light w-180 pl-50 pt-3">Track and manage all customer orders from your shop, and keep everything organized in one place.</p>
   
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

   <p className="text-[25px] font-RedHatText font-regular pt-20">Order details</p>
   <div className="ml-92 flex">

    <div className="w-130 h-30 bg-[#fff] rounded-2xl flex  items-center ">
       <div className="flex-col space-y-2 pl-14">
       <p className="font-RedHatText text-[16px] italic  font-normal  ">Order #1000</p>
       <p className="font-RedHatText text-[13px] font-light italic text-[rgba(0,0,0,0.6)] ">May 8, 2025 at 12:58</p>
       
       </div>

       <button
        onClick={toggleDropdown}
        className="border-2 border-[#43862E] text-black ml-40 mb-7 bg-[#e5f3ec] text-[14px] px-4   rounded-[10px] flex items-center justify-between "
      >
        {status}
        <svg
          className="ml-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-30   rounded-xl shadow-lg bg-white ring-1 ring-green-900 ring-opacity-5 z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer px-4 py-2  hover:bg-gray-100 ${
                status === option ? 'bg-[#AFC3B9]' : ''
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    
    </div>
   

   </div>
   <p className="text-[25px] font-RedHatText font-regular pt-10 ml-25">Customer Information</p>
   <div className="ml-92 flex">

    <div className="w-130 h-50 bg-[#fff] rounded-2xl flex  items-center ">
       <div className="flex-col space-y-2 pl-14">
       <p className="font-RedHatText text-[18px]  font-normal  ">Christopher Russel</p>
       <p className="font-RedHatText text-[13px] font-light italic text-[rgba(0,0,0,0.6)] ">May 8, 2025 at 12:58</p>
       <div className="">
     <div className="space-y-3">
        <div className="flex space-x-4 pt-3">  
            <img src={email} alt="" className="w-4" />
            <p className=" text-[13px] font-RedHatText font-light">Crussel@gmail.com</p>
        </div>
        <div className="flex space-x-4"> 
            <img src={phone} alt="" className="w-4" />
            <p className="text-[14px] font-RedHatText font-light">+213 12345678</p>
        </div>
     </div>
       </div>
       
       </div>
       </div>
      
     </div>

    {/* the items table section  ps: a modifier*/}

     <p className="pr-18 text-[25px] font-RedHatText font-normal ">Items</p>
     <div className="inline-flex flex-col pt-5   py-2 bg-[#fff] rounded-2xl flex  items-center ml-92 ">
      
     <table className="">
          <thead className="border-b border-[#828282] ">
          <tr className="text-left text-black font-RedHatText text-[14px] pb-10">
              <th className="px-10 pb-5">Plant</th>
              <th className="pb-5 "></th>
              <th className="pb-5">Quantity</th>
              <th className="pl-12 pb-5 ">Price</th>
              <th className="pl-7 pb-5 ">Total</th>
              
            </tr>
          </thead>
        
          <tbody className="">
            {plants.map((plant) => (
              <tr
              key={plant.id}
                className=" "
              >
                <td className=" flex pr-6 pt-3">
                <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-30 object-cover rounded cursor-pointer "/>
                  
                </td>
                <td className=" text-[13px] font-RedHatText font-semibold  ">{plant.name}</td>
                <td className="pl-7 py-8 font-light text-[14px] ">{plant.quantity}</td>
                <td className="px-12 py-8 font-light text-[14px] ">{plant.price}</td>
                <td className="px-10 py-8 font-normal text-[14px] ">{plant.total}</td>
                <td className="px-4 py-8 ">
                  
                </td>
                
              </tr>
             
            ))}
          </tbody>

        </table>

        <div className="flex  space-x-15 pl-70">
            <p className="text-[14px] font-RedHatText font-bold">Total</p>
            <p className="text-[14px] font-RedHatText font-bold">1600 DA</p>
        </div>
     
     </div>


   


    </>
  )
};

export default OrderDetails;
