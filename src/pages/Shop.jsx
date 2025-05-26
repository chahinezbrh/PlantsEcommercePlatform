import React, { useState } from "react";

import panier from "../assets/buy.svg";

import categories from "../assets/categories.svg";
import croix from "../assets/croix.svg";
import loupe from "../assets/loupe.svg";
import plant8 from "../assets/produit1.svg";
import { useParams, Link } from "react-router-dom";
import plant from "../assets/PeaceLily2.svg";
import plant09 from "../assets/produit4.svg";
import Navbar from "../components/Navbar";


const allPlants = [
  { id: 1, name: "Snake plant", image: plant8, price: "290DA" },
  { id: 2, name: "Peony plant", image: plant, price: "300DA" },
  { id: 3, name: "Bonsai plant", image: plant09, price: "450DA" },
];

export const Shop = () => {
  const { pageNumber = 1 } = useParams();
  const currentPage = parseInt(pageNumber, 10);

  const [searchInput, setSearchInput] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(allPlants);
  const [searchDone, setSearchDone] = useState(false);

  const handleSearch = () => {
    const results = allPlants.filter((plant) =>
      plant.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredPlants(results);
    setSearchDone(true);
  };

  const clearSearch = () => {
    setSearchInput("");
    setFilteredPlants(allPlants);
    setSearchDone(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#e1ece3]">
     <Navbar/>
      {/* Search Bar */}
      <div className="flex flex-col items-center my-12 px-4">
        <div className="relative w-full max-w-2xl bg-[#f9f9f9] rounded-full px-6 py-4 flex items-center">
          <img src={categories} alt="Categories" className="w-6 h-6 mr-4" />
          <span className="text-black mr-4 hidden sm:block">Categories</span>
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

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <div
              key={plant.id}
              className="bg-[#43862e]/5 p-6 rounded-3xl border-2 border-[#eaeaea]/70 backdrop-blur-[2px] shadow-md w-full max-w-sm flex flex-col items-center"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-auto rounded-2xl"
              />
              <div className="flex justify-between items-center w-full mt-4">
                <h4 className="font-semibold text-black">{plant.name}</h4>
                <span className="text-black">{plant.price}</span>
              </div>
              <div className="flex items-center justify-between w-full mt-4">
                <button className="bg-[#43862e] hover:bg-[#366c26] text-white px-4 py-2 rounded-xl border-2 border-[#43862e] hover:border-[#366c26]">
                  Buy
                </button>
                <div >
                  <img src={panier} alt="Cart" className="w-10" />
                </div>
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