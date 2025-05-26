
import React from 'react'
import '../App.css';
import picture1 from '../assets/picture1.svg';
import picture2 from '../assets/picture2.svg';
import picture3 from '../assets/picture3.svg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const Events = () => {

  const navigate = useNavigate();
  return (
    <div className="mt-[150px]">
      <p className="flex justify-center items-center mb-[50px] text-[30px] font-Inter text-black font-medium">
            Our Events
        </p>


        <ul className="flex">
            <li className="w-1/3"><img src={picture1} alt="picture1" className="w-full hidden md:block h-[300px] object-cover" /></li>

            <li className="w-1/3 relative">
             
               <img src={picture2} alt="picture2"className="w-full h-[300px] object-cover" />
               <button className="absolute inset-0 m-auto w-[330px] h-[90px] font-RedHatText font-medium border-2 border-[#43862E] bg-[rgba(67,134,46,0.7)] text-[40px] text-[rgba(255,255,255,0.76)] transition duration-700
                hover:hover:bg-[rgba(67,134,46,1)] hover:text-[rgba(255,255,255,1)] cursor-pointer" onClick ={() => navigate('/events')}>
                Explore more
               </button>
            
            </li>
            <li className="w-1/3"><img src={picture3} alt="picture3" className="w-full  hidden md:block h-[300px] object-cover"  /></li>
        </ul>
    </div>
  );
};

export default Events;
