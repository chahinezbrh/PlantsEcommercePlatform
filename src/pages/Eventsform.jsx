import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.svg";



 const Eventsform = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#e1ece3] flex flex-col items-center px-4 py-8">
      {/* Header */}
      <div className="w-full max-w-[731px] flex items-center gap-4 mb-6 ">
        <button
          onClick={() => navigate("/Events1")}
          className="p-1 rounded-full hover:bg-[#cdded2] transition-colors cursor-pointer"
        >
          <img
            src={arrow}
            alt="Go to events"
            className="w-[30px] h-[30px] md:w-[45px] md:h-[45px]"
          />
        </button>
        <h1 className="text-black text-2xl md:text-4xl font-semibold font-inter">
          Confirm event
        </h1>
      </div>

      {/* White Box */}
      <div className="w-full max-w-[731px] bg-white shadow-md border-2 border-[#eaeaea]/70 backdrop-blur-[2px] rounded-lg flex flex-col items-center px-6 py-8 md:px-12 md:py-12">
        <form className="w-full flex flex-col gap-10 items-center mt-6">
          {/* Row 1: Name & Family Name */}
          <div className="w-full flex flex-col md:flex-row gap-4">
            <input
              className="h-[55px] w-full bg-[#e1ece3] rounded-[15px] px-4"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-[55px] w-full bg-[#e1ece3] rounded-[15px] px-4"
              type="text"
              placeholder="Family Name"
            />
          </div>

          {/* Row 2: Email */}
          <input
            className="h-[55px] w-full bg-[#e1ece3] rounded-[15px] px-4"
            type="email"
            placeholder="Enter Email"
          />

          {/* Row 3: Phone Number */}
          <input
            className="h-[55px] w-full bg-[#e1ece3] rounded-[15px] px-4"
            type="tel"
            placeholder="Enter Phone Number"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-[55px] mt-20 bg-[#43862e] text-white rounded-[15px] font-normal font-redhat cursor-pointer"
          >
            Participate in event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Eventsform;