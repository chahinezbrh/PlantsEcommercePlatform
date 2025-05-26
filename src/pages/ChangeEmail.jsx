import arrow from "../assets/arrow.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ChangeEmail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New email submitted:", email);
    // You can add validation or API call here
  };

  return (
    <div className="w-full min-h-screen bg-[#e1ece3] flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="flex items-center w-full max-w-[731px] gap-4 mb-6 px-2">
        <img
          src={arrow}
          alt="Back arrow"
          className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] cursor-pointer"
          onClick={() => navigate(-1)} // Go back to previous page
        />
        <h1 className="text-black text-3xl md:text-5xl font-semibold font-inter">
          Email
        </h1>
      </div>

      {/* White Box */}
      <div className="w-full max-w-[731px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-2 border-[#eaeaea]/70 backdrop-blur-[2px] rounded-lg flex flex-col items-center px-4 py-8 md:px-12 md:py-18">
        <p className="w-full max-w-[528px] text-black text-base font-light font-redhat text-center md:text-left mt-4">
          Change your Email to another one
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center mt-6 gap-3 relative"
        >
          <div className="w-full max-w-[620px] h-[55px] bg-[#e1ece3] rounded-[15px] flex items-center px-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-full bg-transparent text-[#818181] text-base font-light font-redhat focus:outline-none placeholder:text-[#818181]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full max-w-[620px] h-[55px] bg-[#43862e] rounded-[15px] flex items-center justify-center text-[#f9f9f9] text-base font-regular font-redhat cursor-pointer mt-8 md:mt-16"
          >
            Change Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeEmail;
