import React from 'react'
import Navbar from '../components/Navbar.jsx'
import product4 from '../assets/product4.svg'
import { useNavigate, useLocation} from 'react-router-dom';
import {useState, useRef } from 'react';
import pfp from '../assets/pfp.svg'
import arrow from '../assets/arrow.svg'
import PeaceLily2 from '../assets/PeaceLily2.svg'
import right from '../assets/right.svg';

const EditProduct = () => {
  


  const navigate = useNavigate();
    const location = useLocation();
    const isActive =(path) => location.pathname === path;
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = () =>{
      
        fileInputRef.current.click(); // Open file dialog
    }
  return (
    <>
     <Navbar/>


     <div className="flex justify-center items-center pl-50">
             <img src={arrow} alt="" className="absolute left-150 pt-10  w-10 " />
             <div className="flex flex-col justify-center items-center pt-10">
             <p className="text-center font-RedHatText text-[35px] font-normal  pl-30 ">My Products</p>

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
  

     <div className="flex pl-60 ">

        <img src={PeaceLily2} alt=""  className="w-70 pl-14 "/>

        
     </div>

     <form className="gap-5 pl-77 flex flex-col gap-[5vh] ">
          
          <div className='relative '>

            <input type="text"  placeholder="Enter the plant's name" className="bg-white text-[13px] text-[#828282] w-120 h-12 pl-6 font-light font-RedHatText focus:outline-none border-none"/>
            <img src={right} alt="" className="  opacity-50 w-10 cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2" />
          </div>
          <div className='flex gap-[3vh] w-120 h-12 '> 

          

        <div className="flex gap-[7vh]  w-120 h-12 ">
          
          <div className="relative">
              <input type="text" placeholder="Enter the price" className="bg-white text-[13px] w-55 pl-4 pr-10 font-light text-[#828282] h-12 border-none focus:outline-none"/>
              <img src={right} alt="" className="w-10  opacity-50 cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2"/>
            </div>

            {/* Second input container */}
            <div className="relative">
              <input type="text" placeholder="Enter amount" className="bg-white text-[13px] w-55 pl-4 pr-10 font-light text-[#828282] h-12 border-none  focus:outline-none"/>
              <img src={right} alt="" className="w-10  opacity-50 cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2"/>
            </div>

         </div>
      </div>
          <input type="text " placeholder= "Write a description fot the plant " className="w-120 h-50 mb-[6vw] bg-white text-[13px] font-light font-RedHatText text-[#828282] pl-6 border-none  focus:outline-none" />
        </form>
        <button className=" flex justify-center items-center cursor-pointer bg-[#43862E] text-[#fff] w-60 h-12 ml-[23vw] rounded-4xl mb-40 font-RedHHatText ">Enter</button>
    
    
   
    </>
  )
}

export default EditProduct;
