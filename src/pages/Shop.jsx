import React, { useState } from "react";
import panier from "../assets/buy.svg";
import categories from "../assets/categories.svg";
import croix from "../assets/croix.svg";
import loupe from "../assets/loupe.svg";
import plant8 from "../assets/produit1.svg";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate, useLocation} from 'react-router-dom';
import buy from '../assets/buy.svg';

import AddtoCart from "../Api/Cart.js";
import { useEffect } from "react";
import axios from "axios";
import produit1 from '../assets/produit1.svg';


export const Shop = () => {
  
 

  const { pageNumber = 1 } = useParams();
  const currentPage = parseInt(pageNumber, 10);
  const [searchInput, setSearchInput] = useState("");
  const [filteredPlants, setFilteredPlants] = useState();
  const [searchDone, setSearchDone] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:9900/api/products/AllProduct')
        console.log("Response status:", response.status);
        console.log("Response data:", response.data);
        setFilteredPlants(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCart();
  }, []);


   console.log("filteredPlants:", filteredPlants);
   console.log("searchDone:", searchDone);
 
  const handleSearch = () => {
    const results = filteredPlants.filter((plant) =>
      plant.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredPlants(results);
    setSearchDone(true);
  };

  const clearSearch = () => {
    setSearchInput("");
    setFilteredPlants(filteredPlants);
    setSearchDone(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#e1ece3]">
     <Navbar/>
      {/* Search Bar */}
      <div className="flex flex-col items-center my-12 px-4">
        <div className="relative w-full max-w-2xl bg-[#f9f9f9] rounded-full px-6 py-4 flex items-center">
          {/* <img src={categories} alt="Categories" className="w-6 h-6 mr-4" />
          <span className="text-black mr-4 hidden sm:block">Categories</span> */}
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-black placeholder-[#818181]"
          />
          <img
            src={croix}
            alt="Clear"
            onClick={clearSearch}
            className="w-4 h-4 mx-4 cursor-pointer"
          />
          <img
            src={loupe}
            alt="Search"
            onClick={handleSearch}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>

      {/* Shop Items */}

<div className="grid grid-cols-1 space-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-15">
  {filteredPlants && filteredPlants.length > 0 ? (
    filteredPlants.map((plant) => (
      <div key={plant._id} className="flex flex-col items-center">
      
        <div
          className="flex flex-col items-center justify-center w-72 h-72 bg-[#43862E11] border-2 border-[#EAEAEA] rounded-[65px] shadow-md px-4 py-4 " style={{ overflow: 'visible' }}
        >
          <div className="flex justify-center">
            <img
              src={`http://localhost:9900/uploads/${plant.image}`}
              alt={plant.name}
              className="max-h-full object-contain w-fit cursor-pointer"
              onClick={() => navigate(`/product-details/${plant._id}`, { state: plant})}
            />
          </div>

         
          <div className="flex pb-20 space-x-20 items-center justify-self-end w-full ml-10">
            <button className="w-24 h-9  text-[#FAFAFA] font-RedHatText font-light bg-[#43862E] rounded-[13px] cursor-pointer transition duration-300 hover:opacity-70 shadow-md" onClick ={()=>AddtoCart(plant._id)}>
              Buy
            </button>
            <img src={buy} alt="cart" className="w-8 cursor-pointer" onClick={()=> navigate('/cart')}/>
          </div>
        </div>

        
        <div className="flex justify-between w-72 pt-2">
          <p className="text-[14px] pl-10 font-semibold text-right font-RedHatText">{plant.name}</p>
          <p className="text-[14px] font-normal font-RedHatText">{plant.price}DA</p>
        </div>
      </div>
    ))
  ) : searchDone ? (
    <p className="text-gray-500 text-xl">No plants found.</p>
  ) : null}
</div>




      {/* Pagination Footer */}
      <div className="flex justify-center items-center gap-4 mt-20">
        <div className="w-3 h-3 bg-[#43862e] rounded-full" />
        <div className="w-8 h-3 bg-[#43862e] rounded-full" />
        <div className="w-3 h-3 bg-[#43862e] rounded-full" />
      </div>
      <div className="flex justify-center gap-6 mt-4 text-base font-redhat">
        <Link to={`/shop/page/${Math.max(currentPage - 1, 1)}`}>
          <span className="underline font-light text-black">Prev</span>
        </Link>
        <span className="text-[#818181] text-[26px]">{currentPage}</span>
        <Link to={`/shop/page/${currentPage + 1}`}>
          <span className="underline font-light text-black">Next</span>
        </Link>
      </div>
    </div>
  );
};

export default Shop;