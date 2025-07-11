import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import addEvents from "../assets/addpicture.svg";
import arrow from "../assets/arrow.svg";
import { useNavigate, useLocation } from "react-router-dom";

const AddEvent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#e1ece3] min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="relative w-full lg:w-1/4 flex-shrink-0 px-4 sm:px-8 md:px-12 pt-10">
          <ul className="mt-6 pt-40 space-y-5 lg:absolute left-0 w-full px-4">
            <li>
              <button
                onClick={() => navigate("/Statistics")}
                className={`text-[16px] font-light w-full py-4 font-RedHatText transition duration-300 cursor-pointer ${
                  isActive("/Statistics")
                    ? "bg-[rgba(67,134,46,1)] text-white"
                    : "hover:bg-[rgba(67,134,46,1)] hover:text-white"
                }`}
              >
                Statistics
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/Nurserydashboard")}
                className={`text-[16px] font-light w-full py-4 font-RedHatText transition duration-300 cursor-pointer ${
                  isActive("/Nurserydashboard")
                    ? "bg-[rgba(67,134,46,1)] text-white"
                    : "hover:bg-[rgba(67,134,46,1)] hover:text-white"
                }`}
              >
                Nurseries
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/EventsDashboard")}
                className={`text-[16px] font-light w-full py-4 font-RedHatText transition duration-300 cursor-pointer ${
                  isActive("/EventsDashboard")
                    ? "bg-[rgba(67,134,46,1)] text-white"
                    : "hover:bg-[rgba(67,134,46,1)] hover:text-white"
                }`}
              >
                Events
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/log-out")}
                className={`text-[16px] font-light w-full py-4 font-RedHatText transition duration-300 cursor-pointer ${
                  isActive("/log-out")
                    ? "bg-[rgba(67,134,46,1)] text-white"
                    : "hover:bg-[rgba(67,134,46,1)] hover:text-white"
                }`}
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-8">
          <div className="flex items-center justify-center lg:justify-start mb-6 gap-4">
            <img
              src={arrow}
              alt="Back arrow"
              className="w-10 h-10 object-contain cursor-pointer"
              onClick={() => navigate("/EventsDashboard")} // adjust route as needed
              role="button"
              tabIndbx={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate("/EventsDashboard");
                }
              }}
            />
            <div className="flex items-center h-10">
              <h2 className="text-[24px] sm:text-[30px] font-RedHatText leading-none">
                Events
              </h2>
            </div>
          </div>

          <div className="flex justify-center">
            <label htmlFor="imageUpload" className="cursor-pointer">
              <img
                src={selectedImage || addEvents}
                alt="Event"
                className={`object-cover border border-black ${
                  selectedImage
                    ? "w-[300px] h-[200px] rounded-md"
                    : "rounded-full w-20 h-20"
                }`}
              />
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              ref={fileInputRef}
            />
          </div>

          <form className="max-w-2xl mx-auto mt-10 space-y-6">
            {/* Event name + Dropdown */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter the event’s name"
                className="bg-[#f9f9f9] rounded-[15px] h-[55px] w-full sm:w-2/3 px-6 text-[#818181] text-base font-RedHatText focus:outline-none"
              />
              <select
                className="appearance-none bg-[#b3c6bb] text-black rounded-[15px] h-[55px] w-full sm:w-1/3 px-4 text-base font-RedHatText focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Status
                </option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="date"
                placeholder="Enter the Date"
                className="bg-[#f9f9f9] rounded-[15px] h-[55px] flex-1 px-6 text-[#818181] text-base font-RedHatText focus:outline-none"
              />
              <input
                type="time"
                placeholder="Enter the Time"
                className="bg-[#f9f9f9] rounded-[15px] h-[55px] flex-1 px-6 text-[#818181] text-base font-RedHatText focus:outline-none"
              />
            </div>

            {/* Location */}
            <input
              type="text"
              placeholder="Enter the Location"
              className="bg-[#f9f9f9] rounded-[15px] h-[55px] w-full px-6 text-[#818181] text-base font-RedHatText focus:outline-none"
            />

            {/* Description */}
            <textarea
              placeholder="Write a description for the event"
              className="bg-[#f9f9f9] rounded-[15px] h-[263px] w-full px-6 pt-4 text-[#818181] text-base font-RedHatText focus:outline-none resize-none"
            ></textarea>

            {/* Submit */}
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="w-56 h-14 bg-[#43862e] text-[#f9f9f9] text-base font-semibold font-RedHatText rounded-[100px] cursor-pointer"
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;