import React from "react";
import { useState } from "react";
import axios from "axios";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/forgotpassword",{email});

      setMessage(response.data.message); // Success message
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="w-full h-screen bg-[#e1ece3] flex items-center justify-center p-4">
      {/* White Box */}
      <div className="w-full max-w-[731px] h-[627px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-2 border-[#eaeaea]/70 backdrop-blur-[2px] rounded-lg flex flex-col items-center px-6 py-10 md:px-12 md:py-18">
        {/* Title */}
        <h1 className="w-full max-w-[580px] text-black text-5xl font-medium font-inter text-center mt-10">
          Reset your password
        </h1>

        {/* Description */}
        <p className="w-full max-w-[528px] text-black text-base font-light font-redhat mt-4 md:mt-8">
          Enter the email associated with your account and we will send you an
          email containing the instructions to reset your password.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center mt-8 md:mt-28 gap-3"
        >
          <div className="w-full max-w-[620px] h-[55px] bg-[#e1ece3] rounded-[15px] flex items-center px-6 mt-4 md:mt-6">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-full bg-transparent text-[#818181] text-base font-light font-redhat focus:outline-none placeholder:text-[#818181]"
            />
          </div>

          {error && (
            <div className="w-[620px] h-[55px] absolute bg-[#ffb3b3]/50 rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#ffb4b4] flex items-center justify-center mt-[-80px]">
              <p className="text-[#b41d1d] text-base font-light font-redhat ml-[-450px]">
                {error}
              </p>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full max-w-[620px] h-[55px] bg-[#43862e] rounded-[15px] flex items-center justify-center text-[#f9f9f9] text-base font-regular font-redhat cursor-pointer mt-8 md:mt-10"
          >
            Send instructions
          </button>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;