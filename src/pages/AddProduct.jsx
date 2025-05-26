import React from 'react'
import Navbar from '../components/Navbar';
import arrow from '../assets/arrow.svg';
import addpicture  from '../assets/addpicture.svg';
import pfp from '../assets/pfp.svg';
import {useNavigate} from 'react-router-dom';

import '../App.css';

export const AddProduct = () => {

  const navigate = useNavigate();
  return (
    <>
     <Navbar/>
   
    
     <div className="flex pt-20">
        <img src={pfp} alt="" className="absolute pt- left-40 w-35"/>
        <ul className="space-y-5 absolute pt-40 left-0 pt- ">

            <li>
                <button className="text-[16px] font-light px-40 py-4 font-RedHatText transition duration-300
                 hover:hover:bg-[rgba(67,134,46,1)] hover:text-[rgba(255,255,255,1)] cursor-pointer ">Personal Information</button>
            </li>

            <li>
                <button className="text-[16px] font-light px-40 py-4 font-RedHatText transition duration-300
                 hover:hover:bg-[rgba(67,134,46,1)] hover:text-[rgba(255,255,255,1)] cursor-pointer">My Products</button>
            </li>
    
            <li>
                <button className="text-[16px] font-light px-40 py-4 font-RedHatText transition duration-300
                 hover:hover:bg-[rgba(67,134,46,1)] hover:text-[rgba(255,255,255,1)] cursor-pointer">My Orders</button>
            </li>
              
            <li>
                <button className="text-[16px]  font-light px-40 py-4 font-RedHatText transition duration-300
                 hover:bg-[rgba(67,134,46,1)] hover:text-[rgba(255,255,255,1)] cursor-pointer">Log Out</button>
            </li>
           
        </ul>
       </div>

 
  <div className="flex-col pl-60">
       <div className="flex ">
            <img src={arrow} alt="" onClick= {()=> navigate('/myproducts')} className=" w-10 opapcity-100  cursor-pointer" />
            <p className="text-[35px] font-RedHatText  pl-12">My Products</p>
        </div>
            <img src={addpicture}  alt="" className="w-30 absolute right-105 pt-20 " />
            <p className="text-[14px] pl-26 pt-60 text-[#000] font-RedHatText font-light  ">Add the plant's photo</p>

       
  </div> 
  <form className="gap-5 pt-2 pl-77 flex flex-col gap-[5vh] ">
          
          <input type="text"  placeholder="Enter the plant's name" className="bg-white text-[13px] text-[#828282] w-120 h-12 pl-6 font-light font-RedHatText"/>
          
          <div className='flex gap-[3vh] w-120 h-12 '> 
          <input type="text" placeholder = "Enter the price" className="bg-white text-[13px] w-60 pl-6 font-light text-[#828282]"/>
          <input type="text" placeholder="Enter amount"className='bg-white w-60 text-[13px] text-[#828282]  pl-6 font-light font-RedHatText' />
          </div>
          <input type="text " placeholder= "Write a description fot the plant " className="w-120 h-50 mb-[6vw] bg-white text-[13px] font-light font-RedHatText text-[#828282] pl-6 " />
        </form>
        <button className=" flex justify-center items-center  bg-[#43862E] text-[#fff] w-60 h-12 ml-[23vw] rounded-4xl mb-40 font-RedHHatText ">Enter</button>
    
    </>
  )
}
export default AddProduct;
