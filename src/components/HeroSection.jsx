import React from 'react';
import HSPlant from '../assets/HSPlant.svg';
import  '../App.css';
import {useNavigate} from 'react-router-dom'



const HeroSection = () => {


  const navigate = useNavigate();

  return (
    <div className=" flex-wrap  mt-[70px] ml-[150px]  ">
      <div className="container mx-auto  flex flex-col md:flex-row items-center">

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-[250x] ">
          <h2 className="text-[43px] font-Inter text-[black] font-semibold">
            Bring Life To Your Space
          </h2>


          <p className="text-[22px] font-RedHatText w-auto max-w-110 mt-[24px] mb-[60px] font-light text-black ">
            Whether you're after a timeless classic or a rare treasure, we've got just what you need in our collection.
          </p>


          <button onClick = {() => navigate('/shop')} className="w-[230px] h-[60px] bg-[#43862E] rounded-[15px] text-[#FAFAFA] text-[20px] font-bold cursor-pointer transition duration-300 hover:opacity-70">
            SHOP NOW
          </button>
        </div>


        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center min-w-[520px] md:justify-end relative">
          <img src={HSPlant} alt="" className="max-w-full md:max-w-[400px] mr-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// import React from 'react';
// import HSPlant from '../assets/HSPlant.svg';

// const HeroSection = () => {
//   return (
   
//   <div className="relative">
//     <div className="container mx-auto ml-[100px] mt-[164px]  ">
//        <div >
//         <h2 className="text-[38px] text-[black] font-bold  ">
//           Bring Life To Your Space
//         </h2>
//         <p className="text-[20px] w-100 mt-[24px] mb-[60px] text-black">
//         Whether you're after a timeless classic or a rare treasure, we've got just what you need in our collection.
//         </p>

//         <button className="w-[230px] h-[60px] bg-[#43862E] rounded-[15px] text-[#FAFAFA] text-[20px] font-bold ">
//          SHOP NOW
//         </button>
//         </div>
//         <div className="flex justify-center relative ">
//             <img src={HSPlant} alt=""  className="absolute ml-[400px]"/>
//         </div>
//     </div>
//     </div>

//   )
// }

// export default HeroSection;
