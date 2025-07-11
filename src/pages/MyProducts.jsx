import React from 'react'
import Navbar from '../components/Navbar';
import arrow from '../assets/arrow.svg'
import pfp from '../assets/pfp.svg'
import PeaceLily from '../assets/PeaceLily.svg'
import Rectangle from '../assets/Rectangle.svg'
import MonsteraDeliciosa from '../assets/MonsteraDeliciosa.svg'
import '../App.css';
import CrassulaOvata from '../assets/CrassulaOvata.svg'
import product4 from '../assets/product4.svg';
import { useNavigate , useLocation} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';



const MyProducts = () => {


      const navigate = useNavigate();
      const location = useLocation();
      const isActive =(path) => location.pathname === path;
      const [Plants, setPlants] = useState([]);
      const token = localStorage.getItem('Token');
      console.log(token);
      useEffect(() => {
          const fetchCart = async () => {
            try {
              const response = await axios.get('http://localhost:9900/api/products/my-product', {headers: {Authorization :`Bearer ${token}`} })
              console.log("Response status:", response.status);
              console.log("Response data:", response.data);
              setPlants(response.data);
            } catch (err) {
              console.log(err.message);
            }
          };
      
          fetchCart();
        }, []);
      
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center pl-50">
        <img src={arrow} alt="" className="absolute left-10  w-10 " />
        <div className="flex flex-col justify-center items-center pt-10">
        <p className="text-center font-RedHatText text-[35px] font-normal  pl-30 ">My Products</p>
        <p className=" text-center font-RedHatText text-[25px] font-light w-160 pl-30 pt-3">view and manage all your products</p>
        <button className='bg-[#43862E] w-56 h-8 text-[14px] font-RedHatText text-[#fff] mt-[5vw] ml-[46vw] rounded-4xl font-light cursor-pointer transition duration-300 hover:opacity-70 ' onClick = {() => navigate('/add-product') }> + Add new plant</button>
   
        </div>
    
    </div>

     <div className="flex">
               <img src={pfp} alt="" className="absolute left-32  w-35"/>
       
               <ul className="space-y-5 absolute left-0 pt-40">
               <li>
                   <button  onClick = {() => navigate('/profile') }  className={`text-[16px] font-light w-96 py-4 font-RedHatText transition duration-300 cursor-pointer
                ${isActive('/profile') 
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

    <div className=" pl-96 pt-30">
        <table className="">
          <thead className="border-b  border-[#828282] ">
          <tr className="text-left pt-8 text-black font-RedHatText text-[14px] ">
              <th className="px-15 pb-8  ">Plant image</th>
              <th className="px-10 pb-8">Plant name</th>
              <th className="px-10 pb-8">Price</th>
              <th className="px-10 pb-8">Stock</th>
              <th className="px-10 pb-8">Status</th>
              <th className="px-10 pb-8 "></th>
            </tr>
          </thead>
        
          <tbody className="divide-y divide-[#828282]">
            {Plants.map((plant) => (
              <tr
              key={plant._id}
                className=" "
              >
                <td className="px-10 flex justify-center items-center">
                  <img
                    src={`http://localhost:9900/uploads/${plant.image}`}
                    alt={plant.name}
                    className="w-30 h-30 object-cover rounded cursor-pointer "
                  />
                </td>
                <td className="px-10 text-[13px] font-RedHatText font-semibold ">{plant.name}</td>
                <td className="px-10 py-8 font-light text-[14px] ">{plant.price}</td>
                <td className="px-12 py-8 font-light text-[14px] ">{plant.stock}</td>
                <td className="px-10 py-8 font-normal text-[14px] ">{plant.status}</td>
                <td className="px-4 py-8 ">
                  <a href="/edit-product" className="text-[#43862E] underline text-[13px] hover:text-green-900">
                    Edit
                  </a>
                </td>
                
              </tr>
             
            ))}
          </tbody>

        </table>
      </div>

   
    </>
  )
};

export default MyProducts;
