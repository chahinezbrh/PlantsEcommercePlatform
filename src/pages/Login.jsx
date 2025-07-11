import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4"; // Uncomment this line if you have a video

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null); // reset error on submit

    try {
      const res = await axios.post(
        "http://localhost:9900/api/pepiniere/login",
        formData
      );

      const { token, status, message } = res.data;

      if (status === "approved" && token) {
        localStorage.setItem("Token", token);
        navigate("/personal-information");
      } else if (status === "rejected") {
        setErrorMsg("Your nursery has been rejected by the admin.");
      } else if (status === "pending") {
        setErrorMsg(
          "Your account is not approved yet. Please wait for admin approval."
        );
      } else {
        setErrorMsg(message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      const backendMessage =
        error.response?.data?.message || error.response?.data?.error;
      setErrorMsg(backendMessage || "Login failed. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#e1ece3] w-screen h-screen flex">
      {/* Optional: uncomment this if you have a video */}


      
      <video
        alt="loginplant"
        className="w-1/2 hidden lg:block h-full object-cover object-[50%_30%]"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>
     

      <div className="flex flex-col justify-center w-full lg:w-1/2 px-4 md:px-20">
        <form onSubmit={handleSubmit}>
          <ul className="flex-col space-y-[30px] flex">
            <div>
              <li>
                <p className="text-[30px] text-center font-Inter font-bold text-black">
                  LOGIN
                </p>
              </li>
              <p className="text-center text-[14px] font-RedHatText ">
                New account?{" "}
                <a
                  href="/signup"
                  className="underline text-[14px] font-RedHatText"
                >
                  Sign Up
                </a>
              </p>
            </div>

            <li>
              <input
                type="text"
                name="email"
                value={formData.email}
                placeholder="email"
                className="bg-[white] text-[14px] font-semibold w-full px-4 py-6 rounded-[20px] border-none "
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="password"
                className="bg-[white] text-[14px] w-full px-4 py-6 font-semibold rounded-[20px] border-none"
                onChange={handleChange}
              />
            </li>
            <li className="flex justify-between">
              <label className="font-RedHatText text-[14px] font-normal ">
                <input type="checkbox" /> Remember me
              </label>
              <a
                href="#"
                className="forgot-password font-RedHatText text-[14px] underline"
              >
                Forgot Password?
              </a>
            </li>

            {errorMsg && (
              <li className="text-center text-red-600 font-semibold">
                {errorMsg}
              </li>
            )}

            <li className="self-center">
              <button
                type="submit"
                className="text-lg py-4 px-16 font-RedHatText font-norm self-center text-[#FAFAFA]  bg-[#43862E] rounded-full cursor-pointer transition duration-300 hover:opacity-70"
              >
                Login
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Login;// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // // import video from "../assets/video.mp4"; // Uncomment if you have a video file

// // const Login = () => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });
// //   const [errorMsg, setErrorMsg] = useState(null);
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setErrorMsg(null); // reset error on submit

// //     try {
// //       const res = await axios.post(
// //         "http://localhost:9900/api/pepiniere/login",
// //         formData
// //       );

// //       const { token, status } = res.data;

// //       if (!token) {
// //         setErrorMsg("Login failed: no token received");
// //         return;
// //       }

// //       if (status === "approved") {
// //         localStorage.setItem("Token", token);
// //         navigate("/personal-information");
// //       } else if (status === "rejected") {
// //         alert("Your nursery has been rejected.");
// //       } else {
// //         alert("Your nursery is not approved yet.");
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       setErrorMsg(
// //         error.response?.data?.message || "Login failed. Please try again."
// //       );
// //     }
// //   };

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   return (
// //     <div className="bg-[#e1ece3] w-screen h-screen flex">
// //       {/* <video
// //         alt="loginplant"
// //         className="w-1/2 hidden lg:block h-full object-cover object-[50%_30%]"
// //         autoPlay
// //         muted
// //         loop
// //       >
// //         <source src={video} type="video/mp4" />
// //       </video> */}

// //       <div className="flex flex-col justify-center items-center w-full">
// //         <form onSubmit={handleSubmit} className="flex flex-col gap-6">
// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className="px-4 py-2 rounded border"
// //             required
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             className="px-4 py-2 rounded border"
// //             required
// //           />

// //           <ul className="flex flex-col gap-4">
// //             {errorMsg && (
// //               <li className="text-center text-red-600 font-semibold">
// //                 {errorMsg}
// //               </li>
// //             )}
// //             <li className="self-center">
// //               <button
// //                 type="submit"
// //                 className="text-lg py-4 px-16 font-RedHatText font-norm self-center text-[#FAFAFA]  bg-[#43862E] rounded-full cursor-pointer transition duration-300 hover:opacity-70"
// //               >
// //                 Login
// //               </button>
// //             </li>
// //           </ul>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



// import React from 'react'
// import video from '../assets/video.mp4'
// import loginplant from '../assets/loginplant.svg'
// import {useState} from  'react';
// import axios from 'axios';



// const Login = () => {
//     const [formData , setformData] = useState({
//       email : "",
//       password: "",
//     })

//      const handleSubmit = async(e)  =>{
//      e.preventDefault()
//       try {

//         const res = await axios.post('http://localhost:9900/api/pepiniere/login', formData )
//         console.log(res)
//         localStorage.setItem('Token', res.data.token)
        
//       } catch (error) {
//         console.log(error)
//       }

//     }

//     const handleChange = (e) => {
//       setformData({ ...formData, [e.target.name]: e.target.value })
//     }
//     return (
      
//       <>
       
//       <div className="bg-[#e1ece3] w-screen h-screen flex ">
        
    
//         <video  alt="loginplant" className="w-1/2 hidden lg:block h-full object-cover object-[50%_30%] " autoPlay muted loop>
//          <source src={video} type="video/mp4"/>

//         </video>
       
         
    
//       <div className="flex flex-col  justify-center w-full lg:w-1/2 px-4  md:px-20">  
//      <form  onSubmit={handleSubmit}>
//        <ul className=" flex-col space-y-[30px] flex">
//        <div>
//        <li className=""> <p className="text-[30px] text-center font-Inter font-bold text-black ">LOGIN</p></li>
//          <p className="text-center text-[14px] font-RedHatText ">
//          New account? 
//          <a href="/signup" className="underline text-[14px] font-RedHatText" >Sign Up</a>
//        </p>
//        </div>

//          <li><input type="text"  name ="email" value ={formData.email} placeholder="email" className="bg-[white] text-[14px] font-semibold w-full px-4  py-6 rounded-[20px] border-none " onChange={handleChange} /></li>
//          <li><input type="password"  name ="password" value ={formData.password} placeholder="password" className="bg-[white] text-[14px] w-full px-4  py-6 font-semibold rounded-[20px] border-none" onChange={handleChange} /></li>
//          <li className="flex justify-between">
//          <label className="font-RedHatText text-[14px] font-normal ">
//           <input type="checkbox"  /> Remember me
//         </label>
//          <a href="#" className="forgot-password font-RedHatText text-[14px] underline" >Forgot Password?</a>
//          </li>
//          <li className='self-center'><button className="text-lg  py-4 px-16 font-RedHatText font-norm self-center text-[#FAFAFA]  bg-[#43862E] rounded-full cursor-pointer transition duration-300 hover:opacity-70"  >Login</button></li>
//        </ul>
//        </form>
//      </div>
     
//     </div>
    
//    </>
//     );
//   }
  
// export default Login;
