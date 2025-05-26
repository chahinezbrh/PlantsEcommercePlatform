import React from 'react'
import Navbar from '../components/Navbar';
import pfp from '../assets/pfp.svg'
import { useNavigate , useLocation} from 'react-router-dom';

   


const myorders = [
  {
    order: "#1001",
    client: "Crussel@gmail.com",
    date: "May 8, 2025",
    total: "1450DA",
    status: "pending",
    
  },
  {
    order: "#1001",
    client: "Crussel@gmail.com",
    date: "May 8, 2025",
    total: "1450DA",
    status: "pending",
  },
  {
    order: "#1001",
    client: "Crussel@gmail.com",
    date: "May 8, 2025",
    total: "1450DA",
    status: "pending",
  },
  {
    order: "#1001",
    client: "Crussel@gmail.com",
    date: "May 8, 2025",
    total: "1450DA",
    status: "pending",
  },
  {
    order: "#1001",
    client: "Crussel@gmail.com",
    date: "May 8, 2025",
    total: "1450DA",
    status: "pending",
  },
  {
    order: "#1001",
    client: "Crussel@gmail.com",
    date: "May 8, 2025",
    total: "1450DA",
    status: "pending",
  },
  {
    order: "#1001",
    client: "Crussel@gmail.com",
    date: "May 8, 2025",
    total: "1450DA",
    status: "pending",
  },
  {
    order: "#1001",
    client: "Crussel@gmail.com",
    date: "May 8, 2025",
    total: "1450DA",
    status: "pending",
  }


  
];

const Myorders = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const isActive =(path) => location.pathname === path;
   

  return (
    <>
     <Navbar/>
    <div className="flex justify-center items-center pl-50">
       
        <div className="flex flex-col justify-center items-center pt-10">
        <p className="text-center font-RedHatText text-[35px] font-normal  pl-30 ">My Orders</p>
        <p className=" text-center font-RedHatText text-[22px] font-light  w-160 pl-30 pt-3 w-170">Track and manage all customer orders from your shop, and keep everything organized in one place.</p>
        
        <div className='flex gap-x-12 mt-20 ml-30 ' >
         <button className="px-10 bg-[#AFC3B9] rounded-2xl cursor-pointer">All</button>
         <button className="px-5 py-1  bg-[#AFC3B9] rounded-2xl cursor-pointer" >Pending</button>
         <button className="px-5  bg-[#AFC3B9] rounded-2xl cursor-pointer">Shipped</button>
         <button className="px-5  bg-[#AFC3B9] rounded-2xl cursor-pointer">Delivered</button>
         <button className="px-5  bg-[#AFC3B9] rounded-2xl cursor-pointer ">Cancelled</button>

        </div>
   
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
                   <button onClick = {() => navigate('/my-orders') }  className={`text-[16px] font-light w-96 py-4 font-RedHatText transition duration-300 cursor-pointer
                ${isActive('/my-orders') 
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
              <th className="px-10 pb-8  ">Order</th>
              <th className="px-10 pb-8">Client</th>
              <th className="px-10 pb-8">Date</th>
              <th className="px-12 pb-8">Total</th>
              <th className="px-10 pb-8">Status</th>
              <th className="px-10 pb-8 "></th>
            </tr>
          </thead>
        
          <tbody className="divide-y divide-[#828282]">
            {myorders.map((myorder) => (
              <tr
              key={myorder.order}
                className=" "
              >
                <td className="px-10 pt-10 flex justify-center items-center">{myorder.order}</td>
                <td className="px-10 text-[13px] font-RedHatText font-light ">{myorder.client}</td>
                <td className="px-10 py-8 font-light text-[14px] ">{myorder.date}</td>
                <td className="px-12 py-8 font-light text-[14px] ">{myorder.total}</td>
                <td className="px-10 py-8 font-normal text-[14px] ">{myorder.status}</td>
                <td className="px-4 py-8 ">
                  <a href="/order-details" className="text-[#43862E] underline text-[13px] hover:text-green-900">
                    View
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

export default Myorders;


