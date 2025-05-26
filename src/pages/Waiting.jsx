import React from 'react'
import Navbar from '../components/Navbar';
import BonsaiTree from '../assets/BonsaiTree.svg';
import {useNavigate} from "react-router-dom";



const Waiting = () => {

  return (
    <>
   
     <div className="flex justify-center items-center py-10">
        <div className="w-full h-auto bg-[#fff] px-40 py-7 h-screen shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-2 border-[#eaeaea]/70 backdrop-blur-[2px]">

         <div className="flex flex-col justify-center items-center">
           <p className="text-[35px] text-center w-100 font-RedHatText font-semibold">Your email has been <span className=" ">confirmed!</span></p>
           <img src={BonsaiTree} alt="" className="w-100 mt-10 " />
         </div>

        </div>

     </div>
    </>
  )
}

export default Waiting;
