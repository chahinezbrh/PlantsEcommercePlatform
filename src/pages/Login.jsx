
import React from 'react'
import video from '../assets/video.mp4'
import loginplant from '../assets/loginplant.svg'
import {useState} from  'react';
import axios from 'axios';



const Login = () => {
    const [formData , setformData] = useState({
      email : "",
      password: "",
    })

     const handleSubmit = async(e)  =>{
     e.preventDefault()
      try {

        const res = await axios.post('http://localhost:9900/api/pepiniere/login', formData )
        console.log(res)
      } catch (error) {
        console.log(error)
      }

    }

    const handleChange = (e) => {
      setformData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
      
      <>
       
      <div className="bg-[#e1ece3] w-full h-screen overflow-hidden flex">
        
    
        <video  alt="loginplant" className="w-1/2 h-full object-cover object-[50%_30%] " autoPlay muted loop>
         <source src={video} type="video/mp4"/>

        </video>
       
         
    
      <div className="flex flex-col gap-24 items-center w-1/2">  
      <div className="flex justify-end ml-auto flex space-x-4">
        <p className="text-right text-[14px] font-RedHatText ">
         New account? 
         <a href="#" className="underline text-[14px] font-RedHatText" >Sign Up</a>
       </p>
       </div>
     <form  onSubmit={handleSubmit}>
       <ul className=" flex-col space-y-[30px] flex justify-center items-center">
         <li className=""> <p className="text-[30px] font-Inter font-bold text-black ">LOGIN</p></li>
         <li><input type="text"  name ="email" value ={formData.email} placeholder="email" className="bg-[white] text-[14px] font-semibold w-[500px] h-12 pl-8 rounded-[20px] border-none " onChange={handleChange} /></li>
         <li><input type="password"  name ="password" value ={formData.password} placeholder="password" className="bg-[white] text-[14px] font-semibold w-[500px] h-12 pl-8 rounded-[20px] border-none" onChange={handleChange} /></li>
         <li className="flex space-x-64">
         <label className="font-RedHatText text-[14px] font-normal ">
          <input type="checkbox"  /> Remember me
        </label>
         <a href="#" className="forgot-password font-RedHatText text-[14px] underline" >Forgot Password?</a>
         </li>
         <li><button className="text-[14px] px-20 py-4 font-RedHatText font-norm text-[#FAFAFA]  bg-[#43862E] rounded-[20px] cursor-pointer transition duration-300 hover:opacity-70"  >Login</button></li>
       </ul>
       </form>
     </div>
     
    </div>
    
   </>
    );
  }
  
export default Login;

