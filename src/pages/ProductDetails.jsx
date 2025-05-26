import React , {useState} from 'react'
import Navbar from '../components/Navbar';
import circle from '../assets/circle.svg';
import LeftArrow from '../assets/LeftArrow.svg';
import RightArrow from '../assets/RightArrow.svg';
import right from '../assets/right.svg';
import left from '../assets/left.svg';
import PeaceLily2 from '../assets/PeaceLily2.svg';
import increment from '../assets/increment.svg'
import buy from '../assets/buy.svg'
import bigrectangle from '../assets/bigrectangle.svg'
import produit1 from '../assets/produit1.svg';
import produit2 from '../assets/produit2.svg';
import produit3 from '../assets/produit3.svg';
import produit4 from '../assets/produit4.svg';

export const ProductDetails = () => {

  const [count, setCount] = useState(1);
  return (
    
  <>
    <Navbar/>
    <div className="flex w-full  h-screen pl-20">

      <img src={left} alt="" className='w-7 pt-4 cursor-pointer'/>
      <div className="relative flex ">
      <img src={circle} alt="" className='w-120 px-10' />
      <img src={PeaceLily2} alt="" className=" w-120 absolute top-55/100 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <img src={right} alt="" className='w-7 cursor-pointer' />

      <div className="pl-30 pt-24 flex-col ">
        <p className="text-[45px] font-RedHatText font-semibold ">Peony Plant</p>
        <p className="text-[22px] font-RedHatText w-100 pt-7 text-[rgba(0,0,0,0.67)] font-light ">Plant potted in Eco-friendly coconut coir soil made from coconuts Plant will arrive potted in your choice of planter</p>
        <p className="text-[14px] text-[#B51D1D] pt-7 font-light ">Amount available</p>
        <p className='text-[38px] font-semibold py-7'>250 da</p>

      <div className="flex">

          <button  className=" h-15 w-56 bg-[#43862E]  text-white text-[20px] font-semibold font-RedHatText rounded-[30px] shadow-2xl  cursor-pointer transition duration-300 hover:opacity-70">Buy Now</button>
          <div className="ml-5 w-15 h-8 mt-4  pr-3 text-right text-[20px] bg-white text-gray-600">
            {count}
          </div>
          <img src={increment} onClick={() => setCount(count+1)} alt="" className="pl-3 cursor-pointer" />
          <img src={buy} alt="" className="w-16 pl-4 cursor-pointer" />

      </div>

    </div>

    
  </div>




  <div className="w-screen border-b-1 border-[#aaaa] shadow-md"></div>
    

       {/* here the first line  */}
  <div className="flex gap-10 pt-30">
    {/* the first product */}
    <div className="flex justify-center w-64 h-64 bg-[#43862E11] border-2 border-[#EAEAEA] rounded-[65px]   [box-shadow:0_6px_10px_#00000033]  " style={{ overflow: 'visible' }}> 
     <img src={produit1} alt=""  className="absolute top-[670px] w-100 h-auto "/>
     <div className="flex-grow mt-30">
      <button className="w-24 h-9 text-[#FAFAFA] font-RedHatText font-light shadow-2xl  bg-[#43862E] absolute ml-7 mt-15 rounded-[13px] cursor-pointer transition duration-300 hover:opacity-70">
        Buy
      </button>
      <img src={buy} alt="" className="w-9 ml-40 mt-15" />
      <div className="flex">
      <p className="pt-15 pl-7 text-[14px] font-semibold font-RedHatText " >Snake plant</p>
      <p className="pt-15 pl-16 text-[14px] font-normal font-RedHatText ">290 da</p>
      </div>
     </div>
    </div>
    
    {/* the second product */}
    <div className="flex justify-center w-64 h-64 bg-[#43862E11] border-2 border-[#EAEAEA] rounded-[65px]   [box-shadow:0_6px_10px_#00000033]  " style={{ overflow: 'visible' }}> 
     <img src={produit2} alt=""  className="absolute top-[717px] w-90 h-auto "/>
     <div className="flex-grow mt-30">
      <button className="w-24 h-9 text-[#FAFAFA] font-RedHatText font-light shadow-2xl  bg-[#43862E] absolute ml-7 mt-15 rounded-[13px] cursor-pointer transition duration-300 hover:opacity-70">
        Buy
      </button>
      <img src={buy} alt="" className="w-9 ml-40 mt-15" />
      <div className="flex">
      <p className="pt-15 pl-7 text-[14px] font-semibold font-RedHatText " >Snake plant</p>
      <p className="pt-15 pl-16 text-[14px] font-normal font-RedHatText ">290 da</p>
      </div>
     </div>
  
    </div>
    
     {/* the third product */}
    <div className="flex justify-center w-64 h-64 bg-[#43862E11] border-2 border-[#EAEAEA] rounded-[65px]   [box-shadow:0_6px_10px_#00000033]  " style={{ overflow: 'visible' }}> 
     <img src={produit3} alt=""  className="absolute top-[698px] w-70 h-auto "/>
     <div className="flex-grow mt-30">
      <button className="w-24 h-9 text-[#FAFAFA] font-RedHatText font-light shadow-2xl  bg-[#43862E] absolute ml-7 mt-15 rounded-[13px] cursor-pointer transition duration-300 hover:opacity-70">
        Buy
      </button>
      <img src={buy} alt="" className="w-9 ml-40 mt-15" />
      <div className="flex">
      <p className="pt-15 pl-7 text-[14px] font-semibold font-RedHatText " >Snake plant</p>
      <p className="pt-15 pl-16 text-[14px] font-normal font-RedHatText ">290 da</p>
      </div>
     </div>
  
    </div>
    
    {/* the fourth product */}
    <div className="flex justify-center w-64 h-64 bg-[#43862E11] border-2 border-[#EAEAEA] rounded-[65px]   [box-shadow:0_6px_10px_#00000033]  " style={{ overflow: 'visible' }}> 
     <img src={produit4} alt=""  className="absolute top-[700px] w-100 h-auto "/>
     <div className="flex-grow mt-30">
      <button className="w-24 h-9 text-[#FAFAFA] font-RedHatText font-light shadow-2xl  bg-[#43862E] absolute ml-7 mt-15 rounded-[13px] cursor-pointer transition duration-300 hover:opacity-70">
        Buy
      </button>
      <img src={buy} alt="" className="w-9 ml-40 mt-15" />
      <div className="flex">
      <p className="pt-15 pl-7 text-[14px] font-semibold font-RedHatText " >Snake plant</p>
      <p className="pt-15 pl-16 text-[14px] font-normal font-RedHatText ">290 da</p>
      </div>
     </div>
  
    </div>
    
    
  </div>


  {/* the second line */}
  <div className="flex gap-10 pt-30">
   {/* the first product */}
  <div className="flex justify-center w-64 h-64 bg-[#43862E11] border-2 border-[#EAEAEA] rounded-[65px]   [box-shadow:0_6px_10px_#00000033]  " style={{ overflow: 'visible' }}> 
     
     <div className="flex-grow mt-30">
      <button className="w-24 h-9 text-[#FAFAFA] font-RedHatText font-light shadow-2xl  bg-[#43862E] absolute ml-7 mt-15 rounded-[13px] cursor-pointer transition duration-300 hover:opacity-70">
        Buy
      </button>
      <img src={buy} alt="" className="w-9 ml-40 mt-15" />
      <div className="flex">
      <p className="pt-15 pl-7 text-[14px] font-semibold font-RedHatText " >Snake plant</p>
      <p className="pt-15 pl-16 text-[14px] font-normal font-RedHatText ">290 da</p>
      </div>
     </div>
    </div>
      {/* the second product */}
    <div className="flex justify-center w-64 h-64 bg-[#43862E11] border-2 border-[#EAEAEA] rounded-[65px]   [box-shadow:0_6px_10px_#00000033]  " style={{ overflow: 'visible' }}> 
     
     <div className="flex-grow mt-30">
      <button className="w-24 h-9 text-[#FAFAFA] font-RedHatText font-light shadow-2xl  bg-[#43862E] absolute ml-7 mt-15 rounded-[13px] cursor-pointer transition duration-300 hover:opacity-70">
        Buy
      </button>
      <img src={buy} alt="" className="w-9 ml-40 mt-15" />
      <div className="flex">
      <p className="pt-15 pl-7 text-[14px] font-semibold font-RedHatText " >Snake plant</p>
      <p className="pt-15 pl-16 text-[14px] font-normal font-RedHatText ">290 da</p>
      </div>
     </div>
    </div>
   {/* the third product */}
    <div className="flex justify-center w-64 h-64 bg-[#43862E11] border-2 border-[#EAEAEA] rounded-[65px]   [box-shadow:0_6px_10px_#00000033]  " style={{ overflow: 'visible' }}> 
     
     <div className="flex-grow mt-30">
      <button className="w-24 h-9 text-[#FAFAFA] font-RedHatText font-light shadow-2xl  bg-[#43862E] absolute ml-7 mt-15 rounded-[13px] cursor-pointer transition duration-300 hover:opacity-70">
        Buy
      </button>
      <img src={buy} alt="" className="w-9 ml-40 mt-15" />
      <div className="flex">
      <p className="pt-15 pl-7 text-[14px] font-semibold font-RedHatText " >Snake plant</p>
      <p className="pt-15 pl-16 text-[14px] font-normal font-RedHatText ">290 da</p>
      </div>
     </div>
    </div>
    {/* the fourth product */}
    <div className="flex justify-center w-64 h-64 bg-[#43862E11] border-2 border-[#EAEAEA] rounded-[65px]   [box-shadow:0_6px_10px_#00000033]  " style={{ overflow: 'visible' }}> 
     
     <div className="flex-grow mt-30">
      <button className="w-24 h-9 text-[#FAFAFA] font-RedHatText font-light shadow-2xl  bg-[#43862E] absolute ml-7 mt-15 rounded-[13px] cursor-pointer transition duration-300 hover:opacity-70">
        Buy
      </button>
      <img src={buy} alt="" className="w-9 ml-40 mt-15" />
      <div className="flex">
      <p className="pt-15 pl-7 text-[14px] font-semibold font-RedHatText " >Snake plant</p>
      <p className="pt-15 pl-16 text-[14px] font-normal font-RedHatText ">290 da</p>
      </div>
     </div>
    </div>
  </div>


      

   

  </>
    
    
   
  )
}

export default ProductDetails;



 {/* <ul className="w-1/2 flex justify-center items-center space-x-10 overflow-visible">
        <li><img src={left} alt="" className="cursor-pointer" /></li>
        <li className="relative overflow-visible" >
          <div className="w-80 h-80 relative overflow-visible">
          <img src={circle} alt="" className="w-full h-full  object-cover " />
          <img src={PeaceLily2} alt="" className="w-120 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </li>
        <li><img src={right} alt="" className="cursor-pointer " /></li>
        
        </ul>

        <img src={PeaceLily2} alt="" className='w-120'/> */}