import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import ficus from "../assets/ficusTree.svg";

import plant8 from "../assets/lavender.svg";
import roses from "../assets/roses.svg";
import gerbera from "../assets/gerbera.svg";

export const Statistics = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const products = [
    {
      name: "Bird's Nest Firm",
      nursery: "Herbal Touch",
      qty: 32,
      revenue: "8000 DA",
      img: plant8,
    },
    {
      name: "Rose",
      nursery: "Herbal Touch",
      qty: 21,
      revenue: "9870 DA",
      img: roses,
    },
    {
      name: "Ficus",
      nursery: "Botanic bliss",
      qty: 14,
      revenue: "16800 DA",
      img: ficus,
    },
    {
      name: "Gerebera",
      nursery: "Botanic Bliss",
      qty: 13,
      revenue: "9100 DA",
      img: gerbera,
    },
  ];

  return (
    <div className="bg-[#e1ece3] min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="relative w-full lg:w-1/4 flex-shrink-0 px-4 sm:px-8 md:px-12 pt-10">
          <ul className="mt-6 pt-40 space-y-5 lg:absolute left-0 w-full px-4">
            {[
              { name: "Statistics", path: "/Statistics" },
              { name: "Nurseries", path: "/Nurserydashboard" },
              { name: "Events", path: "/EventsDashboard" },
              { name: "Log Out", path: "/log-out" },
            ].map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`text-[16px] font-light w-full py-4 font-RedHatText transition duration-300 cursor-pointer ${
                    isActive(item.path)
                      ? "bg-[rgba(67,134,46,1)] text-white"
                      : "hover:bg-[rgba(67,134,46,1)] hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-10 space-y-12">
          {/* Title & Description */}
          <div className="text-center space-y-2">
            <h2 className="text-black text-3xl sm:text-4xl font-medium font-inter">
              Admin Dashboard
            </h2>
            <p className="text-black text-base sm:text-lg md:text-xl font-normal font-redhat leading-relaxed">
              Track performance, manage and control your growth
            </p>
          </div>

          {/* Top Sold Products Table */}
          <div className="w-full bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-6">
              Top Sold Products
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm sm:text-base">
                <thead className="border-b font-semibold">
                  <tr>
                    <th className="py-3">Plant</th>
                    <th className="py-3">Nursery</th>
                    <th className="py-3">Quantity Sold</th>
                    <th className="py-3">Total Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr key={index} className="border-b last:border-none">
                      <td className="py-4 flex items-center gap-3">
                        <span className="font-semibold">{index + 1}.</span>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-25 h-25 object-cover rounded-full"
                        />
                        <span>{item.name}</span>
                      </td>
                      <td className="py-4">{item.nursery}</td>
                      <td className="py-4">{item.qty}</td>
                      <td className="py-4">{item.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
