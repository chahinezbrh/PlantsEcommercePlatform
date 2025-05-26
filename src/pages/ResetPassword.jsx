import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/resetPasswordPepiniere",
        {
          token,
          newPassword: password,
        }
      );
      setSuccess(response.data.message);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };
  return (
    <div className="w-full h-screen bg-[#e1ece3] flex items-center justify-center p-4">
      {/* White Box */}
      <div className="w-full max-w-[731px] h-[627px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-2 border-[#eaeaea]/70 backdrop-blur-[2px] rounded-lg flex flex-col items-center px-6 py-10 md:px-12 md:py-18">
        {/* Title */}
        <h1 className="w-full max-w-[580px] text-black text-5xl font-medium font-inter text-center mt-10">
          Create new password
        </h1>

        {/* Description */}
        <p className="w-full max-w-[528px] text-black text-base font-light font-redhat mt-4 md:mt-8">
          Your new password must be different from previously used passwords.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center mt-8 md:mt-9 gap-3 relative"
        >
          <div className="w-full max-w-[620px] h-[55px] bg-[#e1ece3] rounded-[15px] flex items-center px-6 mt-4 md:mt-15">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full bg-transparent text-[#818181] text-base font-light font-redhat focus:outline-none placeholder:text-[#818181]"
            />
          </div>

          <div className="w-full max-w-[620px] h-[55px] bg-[#e1ece3] rounded-[15px] flex items-center px-6 mt-4 md:mt-6">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-full bg-transparent text-[#818181] text-base font-light font-redhat focus:outline-none placeholder:text-[#818181]"
            />
          </div>

          {error && (
            <div className="w-[620px] h-[55px] absolute bg-[#ffb3b3]/50 rounded-[15px] shadow-md border border-[#ffb4b4] flex items-center justify-center mt-[-20px] transition-opacity duration-300 ease-in-out animate-slideDown">
              <p className="text-[#b41d1d] text-base font-normal"> {error}</p>
            </div>
          )}
          {success && (
            <div className="w-[620px] h-[55px] absolute bg-[#b3ffb3]/50 rounded-[15px] shadow-md border border-[#b4ffb4] flex items-center justify-center mt-[-20px] transition-opacity duration-300 ease-in-out animate-slideDown">
              <p className="text-[#1db41d] text-base font-normal">{success}</p>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full max-w-[620px] h-[55px] bg-[#43862e] rounded-[15px] flex items-center justify-center text-[#f9f9f9] text-base font-regular font-redhat cursor-pointer mt-8 md:mt-10"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;